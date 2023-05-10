//import { useState } from "react";
import { Text, Item } from "./ListItem.styled";

export const ListItem = ({
  notice,
  selectActiveNote,
  activeId,
  setActiveId,
}) => {
  //const [isActive, setIsActive] = useState("");

  const convertDate = (date) => {
    const dateInput = new Date(date);
    const day = dateInput.getUTCDate();
    const month = dateInput.getUTCMonth() + 1;
    const year = dateInput.getUTCFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleClick = (id) => {
    //console.log("isActive", isActive);
    console.log("id", id);
    setActiveId(id);
    selectActiveNote(id);
    //console.log(isActive);
  };
  console.log("notice.id", notice.id);
  console.log("activeId", activeId);
  return (
    <Item
      onClick={() => handleClick(notice.id)}
      selected={activeId === notice.id}
    >
      <Text>{notice.values.biWPGZWQbcK4JdNK_dRSoD}</Text>
      <Text>
        {convertDate(notice.updated_at)} {notice.values.ddK1ldQCnmWQJdPNSMW4D9}
      </Text>
    </Item>
  );
};
