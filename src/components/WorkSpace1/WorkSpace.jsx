import { useState, useEffect } from "react";
import { debounce } from "lodash";
import {
  Box,
  DateTitle,
  Form,
  Text,
  TextArea,
  TextInput,
  Title,
} from "./WorkSpace.styled";
import { useContext } from "react";
import { Context } from "../../context";
import { title, text } from "../api/quintaAPI";

export const WorkSpace = ({ edit, add, activeNote }) => {
  const [data, setData] = useState({});
  const { modifyNote } = useContext(Context);

  useEffect(() => {
    setData({
      title: activeNote?.values[title] || "",
      text: activeNote?.values[text] || "",
    });
  }, [activeNote]);

  //console.log("activeNote", activeNote?.values[title]);
  //console.log("activeNote2", activeNote);
  //console.log("add", add);

  const formatDate = (date) => {
    const dateInput = new Date(date);
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: false,
      timeZoneName: "short",
    };
    return dateInput.toLocaleString("en-US", options);
  };

  const handleChange = debounce((e) => {
    const { name, value } = e.target;
    switch (name) {
      case "title":
        setData({ ...data, title: value });

        break;
      case "text":
        setData({ ...data, text: value });

        break;
      default:
        return;
    }
    modifyNote(data);
  }, 500);

  // useEffect(() => {
  //   if (data.text === "" && data.title === "") {
  //     return;
  //   }

  //   modifyNote(data);
  // }, [data, modifyNote]);

  //console.log(data);
  return (
    <>
      {/* activeNote === null - пустая заметка, создание*/}
      {!activeNote && !add && (
        <Box>
          <h2>Нет активных заметок</h2>
        </Box>
      )}
      {/* создание заметки */}
      {activeNote && edit && !add && (
        <Box>
          <Form>
            <TextInput
              type="text"
              name="title"
              placeholder="Input note's title"
              onChange={handleChange}
              defaultValue={activeNote.values[title]}
            ></TextInput>
            <TextArea
              type="textarea"
              name="text"
              placeholder="Input note"
              onChange={handleChange}
              defaultValue={activeNote.values[text]}
            ></TextArea>
          </Form>
        </Box>
      )}
      {activeNote && add && !edit && (
        <Box>
          <DateTitle>{formatDate(activeNote.updated_at)}</DateTitle>
          <Form>
            <TextInput
              type="text"
              name="title"
              placeholder="Input note's title"
              onChange={handleChange}
            />
            <TextArea
              type="textarea"
              name="text"
              placeholder="Input note"
              onChange={handleChange}
            />
          </Form>
        </Box>
      )}
      {/* просмотр или редактирование (edit true) */}
      {activeNote && !edit && !add && (
        <Box>
          <DateTitle>{formatDate(activeNote.updated_at)}</DateTitle>
          <Title>{activeNote.values[title]}</Title>
          <Text>{activeNote.values[text]}</Text>
        </Box>
      )}
    </>
  );
};
