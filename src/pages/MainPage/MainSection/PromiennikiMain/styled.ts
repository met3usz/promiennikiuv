import styled from 'styled-components';

export const ContentWrapper = styled.div`
  margin: 0;
  margin-bottom: 90px;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 45px;

  @media (max-width: ${({ theme }) => theme.breakpoints.L}) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const Content = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
`;

export const ContentText = styled.p`
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.color.secondaryText};
  line-height: 1.5;
`;

export const ContentList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-position: inside;
  line-height: 1.35;
`;

export const ListItem = styled.li`
  color: ${({ theme }) => theme.color.secondaryText};
  margin-bottom: 5px;
`;

export const MainImage = styled.img`
  width: 150%;
  max-width: 1000px;
  height: auto;
  @media (max-width: ${({ theme }) => theme.breakpoints.L}) {
    width: 80%;
  }
`;

//Text on the left, image on the right

export const ContentLeftTitle = styled.h2`
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.color.primaryIRT};
`;

export const ContentLeftButton = styled.button`
  margin: 0;
  padding: 15px 52px;
  color: ${({ theme }) => theme.color.buttonText};
  background-color: ${({ theme }) => theme.color.primaryIRT};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  outline: none;
  cursor: pointer;
`;
