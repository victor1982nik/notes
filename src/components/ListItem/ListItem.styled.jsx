import styled from "@emotion/styled";

export const Text = styled.p`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const Item = styled.li`
  //display: inline-block;
  //margin-bottom: 20px;
  cursor: pointer;
  padding: 10px 20px;
  &:hover {
    background-color: blue;
  }
  background: ${(props) => (props.selected ? "white" : "transparent")};
`;
