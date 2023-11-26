import styled from 'styled-components';

const ButtonWrapper = styled.button`
    background: rgba(34, 122, 195, 0) 27%;
    color: white;
    border: none;
    padding: 8px, 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3 ease;
    margin: 0 .6rem

    &:hover {
        background-color: #01014e;
    }
`

const Button = ({ ...props }) => {
    return <ButtonWrapper {...props}></ButtonWrapper>
};

export default Button;