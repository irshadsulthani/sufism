import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(90deg, rgba(0, 123, 255, 1) 0%, rgba(28, 87, 255, 1) 100%);
  padding: 20px 50px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  transition: background-color 0.3s ease;
  
  @media (max-width: 768px) {
    padding: 15px 20px;
  }
`;

const NavbarLogo = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: white;
  text-transform: uppercase;
  letter-spacing: 3px;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #ffd700;
  }

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const NavbarLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 100%;
    height: 100vh;
    background: rgba(0, 123, 255, 0.95);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: right 0.4s ease-in-out;
    box-shadow: ${({ isOpen }) => (isOpen ? '0 0 10px rgba(0, 0, 0, 0.2)' : 'none')};
  }
`;

const NavbarLink = styled(Link)`
  color: white;
  font-size: 20px;
  text-decoration: none;
  font-weight: 500;
  padding: 12px 20px;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    color: #ffd700;
  }

  @media (max-width: 768px) {
    font-size: 24px;
    padding: 15px;
  }
`;

const ToggleButton = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  height: 24px;
  width: 30px;
  cursor: pointer;
  position: relative;
  z-index: 1100;

  @media (max-width: 768px) {
    display: flex;
  }

  div {
    height: 4px;
    width: 100%;
    background-color: white;
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  &.open div:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  &.open div:nth-child(2) {
    opacity: 0;
  }

  &.open div:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavbarWrapper>
      <NavbarLogo onClick={() => setIsOpen(false)}>Sufi World</NavbarLogo>
      <ToggleButton onClick={() => setIsOpen(!isOpen)} className={isOpen ? 'open' : ''}>
        <div></div>
        <div></div>
        <div></div>
      </ToggleButton>
      <NavbarLinks isOpen={isOpen}>
        <NavbarLink to="/" onClick={() => setIsOpen(false)}>Home</NavbarLink>
        <NavbarLink to="/about" onClick={() => setIsOpen(false)}>About</NavbarLink>
        <NavbarLink to="/pdf" onClick={() => setIsOpen(false)}>PDF Viewer</NavbarLink>
      </NavbarLinks>
    </NavbarWrapper>
  );
};

export default Navbar;
