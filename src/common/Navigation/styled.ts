import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavigationWrapper = styled.nav`
  padding: 40px;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-height: 100px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const NavigationTitle = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 700;
  font-size: 20px;
`;

export const NavigationList = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 25px;
  list-style-type: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.L}) {
    display: none;
  }
`;

export const ListItem = styled(NavLink)`
  padding: 0;
  margin: 0;
  color: ${({ theme }) => theme.color.primaryText};
  text-decoration: none;

  &.active {
    font-weight: 600;
  }
`;
