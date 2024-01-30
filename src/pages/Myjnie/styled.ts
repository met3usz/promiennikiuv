import styled from 'styled-components';

export const ContentWrapper = styled.div`
  padding: 50px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  @media (max-width: ${({ theme }) => theme.breakpoints.L}) {
    padding-top: 25px;
  }
`;

export const Content = styled.p`
  color: ${({ theme }) => theme.color.secondaryText};
`;

export const List = styled.ul`
  color: ${({ theme }) => theme.color.secondaryText};
`;

export const Images = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  place-items: center;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.color.headerNew};

  &:hover {
    color: #d65351;
  }

  &:active {
    color: #9776f5;
  }
`;
