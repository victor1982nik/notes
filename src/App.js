import { useEffect, useState } from "react";
import "./App.css";
import { AppBar } from "./components/AppBar/AppBar";
import { SideBar } from "./components/SideBar/SideBar";
import { WorkSpace } from "./components/WorkSpace1/WorkSpace";
// import {
//   getFields,
//   createNote,
//   updateNote,
//   deleteNote,
// } from "./components/api/quintaAPI";
import {
  getFields,
  createNote,
  updateNote,
  deleteNote,
} from "./components/api/mockapi";

import { Context } from "./context";
//import { title, text } from "./components/api/quintaAPI";

function App() {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeNote, setActiveNote] = useState(null);
  const [edit, setEdit] = useState(false);
  const [add, setAdd] = useState(false);

  const getData = async () => {
    const resp = await getFields();
    if (!resp) {
      return;
    }
    //setNotes((state) => [...state, ...resp]);
    setNotes(resp);
  };

  const modifyNote = async (data) => {
    if (!activeNote) return;
    //debugger;
    if (edit === false && add === false) return;
    console.log("data", data);
    console.log("activeNoteValues", activeNote.values);
    if (
      data.title === activeNote.values.title &&
      data.text === activeNote.values.text
    )
      return;
    data.id = activeNote?.id;
    const note = await updateNote(data);
    console.log("note after update", note);
    //debugger;
    //setNotes(s => s.map((item))=> item.id === data.id ? {...item, values:{...item.values, }}: item)

    //getData();
  };

  useEffect(() => {
    try {
      setIsLoading(true);
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

  const destroyNote = async () => {
    //console.log("delete ", activeNote.id);
    await deleteNote(activeNote.id);

    setActiveNote(null);
    await getData();
  };

  const editNote = () => {
    setEdit(true);
  };

  const addNote = async () => {
    //console.log("add");
    const note = await createNote();
    console.log(note);
    setAdd(true);
    //setEdit(false);
    setActiveNote(note);
    await getData();
  };

  //console.log("activeNote", activeNote);
  //console.log("notes", notes);
  return (
    <Context.Provider
      value={{
        destroyNote,
        editNote,
        addNote,
        modifyNote,
        setActiveNote,
        activeNote,
      }}
    >
      <div className="App">
        <AppBar isNoticeSelected={activeNote} />
        <main className="main">
          {isLoading && <div>Идет загрузка</div>}
          {notes.length !== 0 && (
            <SideBar notices={notes} selectActiveNote={handleSelectNote} />
          )}
          <WorkSpace activeNote={activeNote} edit={edit} add={add} />
        </main>
      </div>
    </Context.Provider>
  );
}

export default App;
