import { ListItem } from "../ListItem/ListItem";
import { Box, List } from "./SideBar.styled";
import { useState } from "react";

export const SideBar = ({ notices, selectActiveNote }) => {
  const [isActive, setIsActive] = useState(null);
  //console.log(notices);

  // const handleClick = (id) => {
  //   selectActiveNote(id);
  //   setIsActive(id);
  //   console.log(isActive);
  // };
  const handleActive = (id) => {
    setIsActive(id);
  };

  return (
    <>
      <Box>
        <List>
          {notices.map((notice) => (
            <ListItem
              selectActiveNote={selectActiveNote}
              setActiveId={handleActive}
              activeId={isActive}
              key={notice.id}
              notice={notice}
            />
          ))}
        </List>
      </Box>
    </>
  );
};
