import { Button, Form, Input } from "./SearchBox.styled";
import { FaSearch } from "react-icons/fa";
import { useContext } from "react";
import { Context } from "../../context";

export const SearchBox = () => {
  const { searchNotes } = useContext(Context);

  return (
    <>
      <Form onSubmit={searchNotes}>
        <Button aria-label="search button" onSubmit={searchNotes}>
          <FaSearch />
        </Button>
        <Input
          type="text"
          name="query"
          autoComplete="off"
          placeholder="Search"
        />
      </Form>
    </>
  );
};
