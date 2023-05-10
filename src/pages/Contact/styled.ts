import styled from 'styled-components';
import { Container } from '../../common/Container/styled';

export const StyledContainer = styled(Container)`
  padding: 30px;
  display: flex;
  flex-direction: row;
  place-items: center;
  min-height: calc(100vh - 181px);

  @media (max-width: ${({ theme }) => theme.breakpoints.L}) {
    flex-direction: column;
  }
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

export const FormWrapper = styled.div`
  display: grid;
  place-content: center;
`;

export const StyledForm = styled.form`
  margin-bottom: 40px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Star = styled.span`
  color: red;
`;

export const StyledInput = styled.input`
  padding: 10px;
`;

export const StyledButton = styled.input`
  border: none;
  outline: none;
  padding: 10px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.color.link};
  color: ${({ theme }) => theme.color.buttonText};
  cursor: pointer;
  box-shadow: 0px 15px 20px -15px rgba(66, 68, 90, 1);
  transition: 0.5s ease-in-out;

  &:hover {
    transform: scale(1.05);
    background-color: #9776f5;
  }
`;
