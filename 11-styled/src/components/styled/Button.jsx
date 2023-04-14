import styled, { css } from "styled-components";

const PRIMARY_COLOR = "#FFF";
const SECONDARY_COLOR = "#99f5f3";

export const Button = styled.button`
  background-color: ${(props) => props.bgColor || PRIMARY_COLOR};
  border: 1px solid black;
  border-radius: 5px;
  padding: 0.5rem;
  margin: 0.5rem;
  cursor: pointer;

  &:hover {
    outline-style: solid;
    outline-width: 1px;
    outline-color: black;
    outline-offset: 2px;
  }

  &:active {
    opacity: 0.5;
  }

  ${(props) =>
    props.$secondary &&
    css`
      background-color: ${SECONDARY_COLOR};
    `}
`;

export const DeleteButton = styled(Button)`
  background-color: red;
`;
