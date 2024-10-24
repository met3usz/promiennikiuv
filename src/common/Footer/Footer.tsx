import {
  Copyright,
  Name,
  StyledFooter,
  StyledLink,
  StyledName,
} from './styled';

import { Link } from '../../pages/Contact/styled';

function Footer() {
  return (
    <StyledFooter>
      <Name>
        <StyledName>Studio Kreation</StyledName>
        <StyledName>Tel. 606 413 531</StyledName>
        <Link href="mailto:gocekwojciech@gmail.com">
          gocekwojciech@gmail.com
        </Link>
        <StyledLink target="_blank" href="https://bit.ly/3YePOXv">
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
