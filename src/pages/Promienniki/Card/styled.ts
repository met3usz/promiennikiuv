import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 64px;
  margin: 70px 0;
`;

export const CardContent = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CardTitle = styled.h3`
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.color.primaryIRT};
`;

export const CardText = styled.p`
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.color.primaryText};
`;
