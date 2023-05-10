import { SearchBox } from "../SearchBox/SearchBox";
import { Box, Button, Wrapper } from "./AppBar.styled";
import { AiOutlinePlus } from "react-icons/ai";
import { ImBin } from "react-icons/im";
import { FaEdit } from "react-icons/fa";
import { useContext } from "react";
import { Context } from "../../context";

export const AppBar = ({ isNoticeSelected = false }) => {
  const { deleteNote } = useContext(Context);
  return (
    <>
      <header>
        <Box>
          <Wrapper>
            <Button type="button">
              <AiOutlinePlus size={"20px"} />
            </Button>
            <Button
              disabled={!isNoticeSelected}
              type="button"
              OnClick={deleteNote}
            >
              <ImBin size={"20px"} />
            </Button>
            <Button disabled={!isNoticeSelected} type="button">
              <FaEdit size={"20px"} />
            </Button>
          </Wrapper>
          <SearchBox />
        </Box>
      </header>
    </>
  );
};
