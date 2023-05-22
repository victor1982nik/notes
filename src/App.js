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
    setNotes(resp);
  };

  const modifyNote = async (data) => {
    if (!activeNote) return;
    if (edit === false && add === false) return;

    if (
      data.title === activeNote.values.title &&
      data.text === activeNote.values.text
    )
      return;
    data.id = activeNote?.id;
    await updateNote(data);
    getData();
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
    const note = notes.filter((item) => item.id === id);
    setActiveNote(...note);
    setEdit(false);
    setAdd(false);
  };

  const destroyNote = async () => {
    await deleteNote(activeNote.id);
    setActiveNote(null);
    await getData();
  };

  const editNote = () => {
    setEdit(true);
  };

  const addNote = async () => {
    const note = await createNote();
    setAdd(true);
    setActiveNote(note);
    await getData();
  };

  const searchNotes = (e) => {
    e.preventDefault();
    const queryStr = e.target.elements.query.value;
    if (queryStr === "") {
      return;
    }
    const filteredNotes = notes.filter(
      (note) =>
        note.values.text.includes(queryStr) ||
        note.values.title.includes(queryStr)
    );
    e.target.elements.query.value = "";
    return filteredNotes;
  };

  return (
    <Context.Provider
      value={{
        destroyNote,
        editNote,
        addNote,
        modifyNote,
        setActiveNote,
        handleSelectNote,
        searchNotes,
        activeNote,
      }}
    >
      <div className="App">
        <AppBar />
        <main className="main">
          {isLoading && <div>Идет загрузка</div>}
          {notes.length !== 0 && <SideBar notices={notes} />}
          <WorkSpace edit={edit} add={add} />
        </main>
      </div>
    </Context.Provider>
  );
}

export default App;
