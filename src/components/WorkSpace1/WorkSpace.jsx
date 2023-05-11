import { useEffect, useState } from "react";
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

export const WorkSpace = ({ activeNote, edit, add }) => {
  const [data, setData] = useState({
    title: "",
    text: "",
  });
  const { modifyNote } = useContext(Context);
  //console.log("activeNote", activeNote?.record);
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
  }, 1000);

  useEffect(() => {
    if (data.text === "" && data.title === "") {
      return;
    }
    modifyNote(data);
  }, [data, modifyNote]);

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
      {activeNote && edit && (
        <Box>
          <Form>
            <TextInput
              type="text"
              name="title"
              placeholder="Input note's title"
              onChange={handleChange}
              //value={activeNote.values.biWPGZWQbcK4JdNK_dRSoD}
            ></TextInput>
            <TextArea
              type="textarea"
              name="text"
              placeholder="Input note"
              onChange={handleChange}
              //value={activeNote.values.ddK1ldQCnmWQJdPNSMW4D9}
            ></TextArea>
          </Form>
        </Box>
      )}
      {activeNote && add && (
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
          <Title>{activeNote.values.biWPGZWQbcK4JdNK_dRSoD}</Title>
          <Text>{activeNote.values.ddK1ldQCnmWQJdPNSMW4D9}</Text>
        </Box>
      )}
    </>
  );
};
