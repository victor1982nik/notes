import { useState } from "react";
import {
  Box,
  DateTitle,
  Form,
  Text,
  TextArea,
  TextInput,
  Title,
} from "./WorkSpace.styled";

export const WorkSpace = ({ activeNote, edit, add }) => {
  const [data, setData] = useState({ title: "", text: "" });
  //console.log(activeNote);

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

  const handleTitleChanged = (e) => {
    const value = e.target.value;
    setData({ ...data, title: value });
  };

  const handleTextChanged = (e) => {
    const value = e.target.value;
    setData({ ...data, text: value });
  };

  console.log(data);
  return (
    <>
      {/* activeNote === null - пустая заметка, создание*/}
      {!activeNote && !add && (
        <Box>
          <h2>Нет активных заметок</h2>
        </Box>
      )}
      {/* создание заметки */}
      {!activeNote && add && (
        <Box>
          <Form>
            <TextInput
              type="text"
              name="title"
              placeholder="Input note's title"
              onChange={handleTitleChanged}
            ></TextInput>
            <TextArea
              type="textarea"
              name="text"
              placeholder="Input note"
              onChange={handleTextChanged}
            ></TextArea>
          </Form>
        </Box>
      )}

      {/* просмотр или редактирование (edit true) */}
      {activeNote && !edit && (
        <Box>
          <DateTitle>{formatDate(activeNote[0].updated_at)}</DateTitle>
          <Title>{activeNote[0].values.biWPGZWQbcK4JdNK_dRSoD}</Title>
          <Text>{activeNote[0].values.ddK1ldQCnmWQJdPNSMW4D9}</Text>
        </Box>
      )}
      {activeNote && edit && <Box></Box>}
    </>
  );
};
