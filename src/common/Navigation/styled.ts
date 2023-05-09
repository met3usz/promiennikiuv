import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

export const NavigationWrapper = styled(Navbar)`
  padding: 20px;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 550px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const NavigationTitle = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 700;
  font-size: 20px;
`;
