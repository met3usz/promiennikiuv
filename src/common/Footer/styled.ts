import styled from 'styled-components';

export const StyledFooter = styled.footer`
  font-size: 14px;
  padding: 10px;
  padding-right: 25px;
  min-height: 50px;
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25);
`;

export const StyledLink = styled.a`
  font-weight: 400;
  color: ${({ theme }) => theme.color.link};

  &:active {
    color: #9776f5;
  }
`;

export const Name = styled.div`
  text-align: right;

  @media (max-width: 600px) {
    text-align: center;
  }
`;

export const StyledName = styled.p`
  font-size: 16px;
  margin-bottom: 0;
`;

export const Copyright = styled.div`
  margin-top: 25px;
  text-align: center;
  font-size: 12px;
`;
