import { Container } from '../../common/Container/styled';
import { ContactContainer, Content, Link, StyledContainer } from './styled';
import Footer from '../../common/Footer/Footer';

const Contact = () => {
  return (
    <>
      <Container>
        <StyledContainer>
          <Content>
            <h1>
              Jeśli jesteś zainteresowany którymś z naszych produktów, prosimy o
              kontakt:
            </h1>
            <ContactContainer>
              <h2>Tel. 606 413 531</h2>
              <h3>
                <Link href="mailto:gocekwojciech@gmail.com">
                  gocekwojciech@gmail.com
                </Link>
              </h3>
            </ContactContainer>
          </Content>
        </StyledContainer>
      </Container>
      <Footer />
    </>
  );
};

export default Contact;
