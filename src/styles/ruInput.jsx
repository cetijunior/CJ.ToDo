import styled from "styled-components";

const Input = styled.input`
  background-color: #BFD7ED;
  border-radius: 0.75rem;
  border: none;
  padding: 0.75rem;
  width: 16rem;
  font-family: Jua, sans-serif;
  text-transform: uppercase;
  box-shadow: 0px 4px 8px 0px #C3E0E5;
`;

const Inputs = ({ ...props }) => {
  return <Input {...props}></Input>;
};

export default Inputs;
