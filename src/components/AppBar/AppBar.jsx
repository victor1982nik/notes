import { SearchBox } from "../SearchBox/SearchBox";
import { Box, Button, Wrapper } from "./AppBar.styled";

export const AppBar = () => {
  return (
    <>
      <header>
        <Box>
          <Wrapper>
            <Button type="button">Add</Button>
            <Button type="button">Remove</Button>
            <Button type="button">Edit</Button>
          </Wrapper>
          <SearchBox />
        </Box>
      </header>
    </>
  );
};
