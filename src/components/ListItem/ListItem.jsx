//import { title, text } from "../api/quintaAPI";
import { Text, Item } from "./ListItem.styled";
import { useContext } from "react";
import { Context } from "../../context";

export const ListItem = ({ notice, selectActiveNote, setActiveId }) => {
  const { activeNote } = useContext(Context);

  const convertDate = (date) => {
    const dateInput = new Date(date);
    const day = dateInput.getUTCDate();
    const month = dateInput.getUTCMonth() + 1;
    const year = dateInput.getUTCFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleClick = (id) => {
    //console.log("id", id);
    setActiveId(id);
    selectActiveNote(id);
    //console.log(isActive);
  };
  //console.log("notice.id", notice.id);
  //console.log("activeId", activeId);
  return (
    <Item
      onClick={() => handleClick(notice.id)}
      selected={activeNote?.id === notice.id}
    >
      <Text>{notice.values?.title}</Text>

      <Text>
        {convertDate(notice.updated_at)} {notice.values?.text}
      </Text>
    </Item>
  );
};

/* <Item
  onClick={() => handleClick(notice.id)}
  selected={activeNote?.id === notice.id}
>
  <Text>{notice.values[title]}</Text>

  <Text>
    {convertDate(notice.updated_at)} {notice.values[text]}
  </Text>
</Item>; */
