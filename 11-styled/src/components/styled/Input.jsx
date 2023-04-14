import styled from "styled-components";

export const Input = styled.input.attrs((props) => ({
  type: "text",
  myPadding: props.size || "0.5rem",
}))`
  padding: ${(props) => props.myPadding};
  margin: ${(props) => props.myPadding};
`;

export const PasswordInput = styled(Input).attrs({
  type: "password",
})``;
