//import { useContext } from "react";
import { Box, DateTitle, Text, Title } from "./WorkSpace.styled";
//import { Context } from "../../context";

export const WorkSpace = ({ activeNote, edit }) => {
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
  return (
    <>
      {/* activeNote === null - пустая заметка, создание*/}
      {!activeNote && <Box></Box>}
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
