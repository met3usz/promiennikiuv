import {
  Copyright,
  Name,
  StyledFooter,
  StyledLink,
  StyledName,
} from './styled';

function Footer() {
  return (
    <StyledFooter>
      <Name>
        <StyledName>Wojciech Gocek</StyledName>
        <StyledLink
          target="_blank"
          href="https://bit.ly/rekomendacja-producenta"
        >
          Rekomendacja producenta
        </StyledLink>
      </Name>
      <Copyright>
        <p>
          <span>&#169;</span> promiennikuv.pl | Wszelkie prawa zastrzeżone
        </p>
      </Copyright>
    </StyledFooter>
  );
}

export default Footer;
