import { useEffect, useState } from "react";
import "./App.css";
import { AppBar } from "./components/AppBar/AppBar";
import { SideBar } from "./components/SideBar/SideBar";
import { WorkSpace } from "./components/WorkSpace1/WorkSpace";
import { getFields, createNote, updateNote } from "./components/api/quintaAPI";
import { Context } from "./context";
// const notices = [
//   {
//     id: "1",
//     title: "title 1",
//     text: "text notice 1",
//     createdAt: new Date().toString(),
//   },
//   {
//     id: "2",
//     title: "title 2",
//     text: "text notice 2",
//     createdAt: Date.now().toString(),
//   },
//   {
//     id: "3",
//     title: "title 3",
//     text: "text notice 3",
//     createdAt: Date.now().toString(),
//   },
// ];

function App() {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeNote, setActiveNote] = useState(null);
  const [edit, setEdit] = useState(false);
  const [add, setAdd] = useState(false);

  useEffect(() => {
    try {
      setIsLoading(true);
      const getData = async () => {
        const resp = await getFields();
        if (!resp) {
          return;
        }
        //setNotes((state) => [...state, ...resp]);
        setNotes(resp);
      };
      getData();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleSelectNote = (id) => {
    //console.log(id);
    const note = notes.filter((item) => item.id === id);
    //console.log(note);
    setActiveNote(...note);
    setEdit(false);
    setAdd(false);
  };

  const deleteNote = () => {
    console.log("delete ", activeNote.id);
    //console.log("delete")
    //setNotes((state) => state.filter((note) => note.id !== id));
    //setActiveNote(null)
  };

  const editNote = () => {
    console.log("edit");
    setEdit(true);
  };

  const addNote = async () => {
    //console.log("add");
    const note = await createNote();
    console.log(note);
    setAdd(true);
    setActiveNote(note.record);
  };

  const modifyNote = async (data) => {
    //console.log("data", data);
    data.id = activeNote?.id;
    //console.log("activeNote.id", activeNote?.id);
    //console.log("data", data);
    const note = await updateNote(data);
    console.log(note);
  };
  //console.log("activeNote", activeNote);
  return (
    <Context.Provider value={{ deleteNote, editNote, addNote, modifyNote }}>
      <div className="App">
        <AppBar isNoticeSelected={activeNote} />
        <main className="main">
          {isLoading && <div>Идет загрузка</div>}
          <SideBar notices={notes} selectActiveNote={handleSelectNote} />
          <WorkSpace activeNote={activeNote} edit={edit} add={add} />
        </main>
      </div>
    </Context.Provider>
  );
}

export default App;
