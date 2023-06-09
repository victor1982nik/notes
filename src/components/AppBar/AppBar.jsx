import { SearchBox } from "../SearchBox/SearchBox";
import { Box, Button, Wrapper } from "./AppBar.styled";
import { AiOutlinePlus } from "react-icons/ai";
import { ImBin } from "react-icons/im";
import { FaEdit } from "react-icons/fa";
import { useContext } from "react";
import { Context } from "../../context";

export const AppBar = () => {
  const { destroyNote, editNote, addNote, activeNote } = useContext(Context);
  //console.log("addNote", addNote);
  return (
    <>
      <header>
        <Box>
          <Wrapper>
            <Button type="button" onClick={addNote}>
              <AiOutlinePlus size={"20px"} />
            </Button>
            <Button disabled={!activeNote} type="button" onClick={destroyNote}>
              <ImBin size={"20px"} />
            </Button>
            <Button disabled={!activeNote} type="button" onClick={editNote}>
              <FaEdit size={"20px"} />
            </Button>
          </Wrapper>
          <SearchBox />
        </Box>
      </header>
    </>
  );
};
