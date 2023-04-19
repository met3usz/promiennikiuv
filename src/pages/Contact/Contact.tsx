import { Container } from '../../common/Container/styled';
import Footer from '../../common/Footer/Footer';
import { StyledContainer } from './styled';

function Contact() {
  return (
    <>
      <Container>
        <StyledContainer>
          <h1>
            Jesteś zainteresowany którymś z naszych produktów? Zadzwoń do nas!
          </h1>
          <h2>Kontakt:</h2>
          <h3>Tel. 606413531</h3>
          <h3>
            <a href="mailto:kontakt@promiennikuv.pl">kontakt@promiennikuv.pl</a>
          </h3>
        </StyledContainer>
      </Container>
      <Footer />
    </>
  );
}

export default Contact;

// Kontakt:
// Tel. 606413531
// kontakt@promiennikuv.pl
