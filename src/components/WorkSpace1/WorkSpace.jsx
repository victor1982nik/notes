import { useState, useEffect } from "react";
import { Box, DateTitle, Form, TextArea, TextInput } from "./WorkSpace.styled";
import { useContext } from "react";
import { Context } from "../../context";
import { useDebounce } from "../hooks/hooks";
import { formatDate } from "../utils/formatDate";
//import { title, text } from "../api/quintaAPI";

export const WorkSpace = ({ edit, add }) => {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteText, setNoteText] = useState("");
  const [id, setId] = useState(null);

  const { modifyNote, activeNote } = useContext(Context);

  useEffect(() => {
    if (!activeNote) return;
    //if active note changed, no return, yes copy it's data to state
    if (id === activeNote.id) return;
    setId(activeNote.id);
    setNoteTitle(activeNote.values.title);
    setNoteText(activeNote.values.text);
  }, [activeNote, id]);

  const debouncedRequest = useDebounce(() => {
    modifyNote({ id, title: noteTitle, text: noteText });
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "title":
        setNoteTitle(value);
        break;
      case "text":
        setNoteText(value);
        break;
      default:
        return;
    }
    debouncedRequest();
  };

  return (
    <>
      {/* activeNote === null - пустая заметка, создание*/}
      {!activeNote && (
        <Box>
          <h2>Нет активных заметок</h2>
        </Box>
      )}
      {/* редактирование заметки */}
      {activeNote && (edit || add) && (
        <Box>
          <DateTitle>{formatDate(activeNote.updated_at)}</DateTitle>
          <Form>
            <TextInput
              type="text"
              name="title"
              placeholder="Input note's title"
              onChange={handleChange}
              value={noteTitle}
            />
            <TextArea
              type="textarea"
              name="text"
              placeholder="Input note"
              onChange={handleChange}
              value={noteText}
            />
          </Form>
        </Box>
      )}
      {/* просмотр   */}
      {activeNote && !edit && !add && (
        <Box>
          <DateTitle>{formatDate(activeNote.updated_at)}</DateTitle>
          <TextInput
            type="text"
            value={activeNote.values.title}
            readOnly="true"
          />
          <TextArea
            type="textarea"
            value={activeNote.values.text}
            readOnly="true"
          />
        </Box>
      )}
    </>
  );
};
