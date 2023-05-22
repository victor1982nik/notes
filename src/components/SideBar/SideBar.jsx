import { ListItem } from "../ListItem/ListItem";
import { Box, List } from "./SideBar.styled";

export const SideBar = ({ notices }) => {
  return (
    <>
      <Box>
        <List>
          {notices.map((notice) => (
            <ListItem key={notice.id} notice={notice} />
          ))}
        </List>
      </Box>
    </>
  );
};
