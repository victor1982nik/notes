//import { title, text } from "../api/quintaAPI";
import { Text, Item } from "./ListItem.styled";
import { useContext } from "react";
import { Context } from "../../context";
import { convertDate } from "../utils/formatDate";

export const ListItem = ({ notice }) => {
  const { activeNote, handleSelectNote } = useContext(Context);

  return (
    <Item
      onClick={() => handleSelectNote(notice.id)}
      selected={activeNote?.id === notice.id}
    >
      <Text>{notice.values?.title}</Text>
      <Text>
        {convertDate(notice.updated_at)} {notice.values?.text}
      </Text>
    </Item>
  );
};
