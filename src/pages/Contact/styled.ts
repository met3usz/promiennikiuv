import styled from 'styled-components';
import { Container } from '../../common/Container/styled';

export const StyledContainer = styled(Container)`
  padding: 30px;
  display: flex;
  flex-direction: row;
  place-items: center;
  min-height: calc(100vh - (80px + 154px));

  @media (max-width: ${({ theme }) => theme.breakpoints.L}) {
    flex-direction: column;
  }
`;

export const ContactContainer = styled.div`
  margin-top: 60px;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.color.link};

  &:active {
    color: #9776f5;
  }
`;

export const Content = styled.div`
  padding: 15px;
  place-self: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.L}) {
    place-self: center;
  }
`;
