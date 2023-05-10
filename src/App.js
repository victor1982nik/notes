import { useEffect, useState } from "react";
import "./App.css";
import { AppBar } from "./components/AppBar/AppBar";
import { SideBar } from "./components/SideBar/SideBar";
import { WorkSpace } from "./components/WorkSpace/WorkSpace";
import { getFields } from "./components/api/quintaAPI";
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
    setActiveNote(note);
    setEdit(false);
  };

  const deleteNote = () => {
    console.log("delete ", activeNote.id);
    //console.log("delete")
    //setNotes((state) => state.filter((note) => note.id !== id));
  };

  const EditNote = () => {
    console.log("edit");
    setEdit(true);
  };
  console.log(activeNote);
  return (
    <Context.Provider value={{ deleteNote, EditNote }}>
      <div className="App">
        <AppBar isNoticeSelected={activeNote} />
        <main className="main">
          {isLoading && <div>Идет загрузка</div>}
          <SideBar notices={notes} selectActiveNote={handleSelectNote} />
          <WorkSpace activeNote={activeNote} edit={edit} />
        </main>
      </div>
    </Context.Provider>
  );
}

export default App;
