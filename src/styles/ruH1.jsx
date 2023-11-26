import styled from "styled-components";

const Title = styled.h1`
    font-size: 1.5rem;
    text-transform: uppercase;
    padding: .8rem 0;
    font-family: Jua;
    letter-spacing: 0.2rem;
    color: #274472;
`;

const Titles = ({ ...props }) => {
    return <Title {...props}></Title>
};

export default Titles;