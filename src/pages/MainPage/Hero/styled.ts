import styled from 'styled-components';

export const HeroWrapper = styled.div`
  margin: 0;
  padding: 90px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const HeroLeft = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
`;

export const HeroTitle = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 52px;
`;

export const HeroText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 18px;
  color: ${({ theme }) => theme.color.secondaryText};
`;

export const HeroImage = styled.img`
  width: 150%;
  max-width: 1000px;
  height: auto;
`;

export const HeroButton = styled.button`
  margin: 0;
  padding: 15px;
  color: ${({ theme }) => theme.color.buttonText};
  outline: none;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.color.primaryDrester};
  cursor: pointer;
`;
