import { Box, List, ListItem } from "./SideBar.styled";

export const SideBar = ({ notices }) => {
  console.log(notices);
  return (
    <>
      <Box>
        <List>
          {notices.map((notice) => (
            <ListItem key={notice.id}>
              <p>{notice.title}</p>
              <p>
                {notice.createdAt} {notice.text}
              </p>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
};
