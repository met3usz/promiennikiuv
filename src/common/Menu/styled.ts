import styled from 'styled-components';
import { ListItem } from '../Navigation/styled';

export const StyledMenu = styled.nav<{ open: boolean }>`
  top: 0;
  right: 0;
  height: 100vh;
  width: 35vw;
  position: fixed;
  background-color: lightgray;
  z-index: 0;
  padding: 10rem 0;
  flex-direction: column;
  display: ${({ open }) => (open ? 'flex' : 'none')};
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`;

export const StyledHamburger = styled.button<{ open: boolean }>`
  width: 2rem;
  height: 2rem;
  padding: 0;
  background: transparent;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: none;
  cursor: pointer;
  outline: none;
  z-index: 1;
  left: ${({ open }) => (open ? '29vw' : '3vw')};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    left: ${({ open }) => (open ? 'initial' : '3vw')};
    right: ${({ open }) => (open ? '2vw' : 'initial')};
  }

  div {
    position: relative;
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    background-color: black;
    transition: all 0.3s linear;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

export const MobileLink = styled(ListItem)`
  font-size: 24px;
  padding: 20px;
`;
