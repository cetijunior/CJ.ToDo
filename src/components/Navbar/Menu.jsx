import styled from 'styled-components'
import PropTypes from 'prop-types';

const StyledMenu = styled.menu`
display: flex;
flex-direction: column;
justify-content: center;
background: #274472;
transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
height: 100vh;
text-align: left;
padding: 2rem;
position: absolute;
margin-top: -10px;
top: 0;
left: 0;
transition: transform 0.3s ease-in-out;


@media (max-width: 576px) {
    width: 100%;
  }

a {
  font-size: 1.5rem;
  text-transform: uppercase;
  padding: 2rem 0;
  font-family: Jua;
  letter-spacing: 0.3rem;
  color: #C3E0E5;
  text-decoration: none;
  transition: color 0.3s linear;

  @media (max-width: 576px) {
    font-size: 1.5rem;
    text-align: center;
  }

  &:hover {
    color: #5885AF;
  }
}
`

const Menu = ({ open }) => {
    return (
        <StyledMenu open={open}>
            <a href='/'>
                <span role='img'>📗</span>
                To-Do List
            </a>
            <a href='/timer'>
                <span role='img'>⌚</span>
                Timer
            </a>
        </StyledMenu>
    )
}

Menu.propTypes = {
    open: PropTypes.bool.isRequired,
};

export default Menu;