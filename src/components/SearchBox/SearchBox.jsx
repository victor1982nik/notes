import { Button, Form, Input } from "./SearchBox.styled";
import { FaSearch } from "react-icons/fa";

export const SearchBox = () => {
  return (
    <>
      <Form onClick={null}>
        <Button aria-label="search button">
          <FaSearch />
        </Button>
        <Input
          type="text"
          autoComplete="off"
          placeholder="Search"
          onChange={null}
        />
      </Form>
    </>
  );
};
