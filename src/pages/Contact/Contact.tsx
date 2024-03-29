import { Container } from '../../common/Container/styled';
import {
  Content,
  FormWrapper,
  Link,
  Star,
  StyledButton,
  StyledContainer,
  StyledForm,
  StyledInput,
  StyledTextArea,
} from './styled';
import Footer from '../../common/Footer/Footer';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { SERVICE_ID, TEMPLATE_ID, USER_ID } from '../../emailJScredentials';

const Contact = () => {
  const form = useRef();

  return (
    <>
      <Container>
        <StyledContainer>
          <Content>
            <h1>
              Jesteś zainteresowany którymś z naszych produktów? Zadzwoń do nas
              lub zostaw wiadomość!
            </h1>
            <h2>Kontakt:</h2>
            <h3>Tel. 606 413 531</h3>
            <h3>
              <Link href="mailto:kontakt@promiennikuv.pl">
                kontakt@promiennikuv.pl
              </Link>
            </h3>
          </Content>
          <FormWrapper>
            <StyledForm
              ref={() => {
                form;
              }}
              onSubmit={(e: React.SyntheticEvent) => {
                e.preventDefault();
                emailjs
                  .sendForm(SERVICE_ID, TEMPLATE_ID, '#form', USER_ID)
                  .then(
                    (result) => {
                      console.log(result.text);
                      Swal.fire({
                        icon: 'success',
                        title: 'Twoja wiadomość została wysłana!',
                      });
                    },
                    (error) => {
                      console.log(error.text);
                      Swal.fire({
                        icon: 'error',
                        title: 'Coś poszło nie tak!',
                        text: 'Nie udało się wysłać Twojej wiadomości. Spróbuj ponownie później!',
                      });
                    }
                  );
              }}
              id="form"
            >
              <label>
                Imię<Star>*</Star>
              </label>
              <StyledInput
                type="text"
                name="user_name"
                placeholder="Imię"
                required
              />
              <label>
                Email<Star>*</Star>
              </label>
              <StyledInput
                type="email"
                name="user_email"
                placeholder="Email"
                required
              />
              <label>
                Wiadomość<Star>*</Star>
              </label>
              <StyledTextArea
                name="message"
                rows={10}
                cols={30}
                placeholder="Napisz wiadomość!"
                required
              />
              <StyledButton type="submit" value="Wyślij!" />
            </StyledForm>
          </FormWrapper>
        </StyledContainer>
      </Container>
      <Footer />
    </>
  );
};

export default Contact;
