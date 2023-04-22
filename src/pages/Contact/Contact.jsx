import { Container } from '../../common/Container/styled';
import { Content, Link, Star, StyledButton, StyledContainer, StyledForm, StyledInput } from './styled';
import Footer from '../../common/Footer/Footer';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const SERVICE_ID = 'service_zxnetq2';
const TEMPLATE_ID = 'template_u73ruic';
const USER_ID = '1Hz09AIsj_stKXoOG';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Twoja wiadomość została wysłana!'
        })
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Coś poszło nie tak!',
          text: 'Nie udało się wysłać Twojej wiadomości. Spróbuj ponownie później!'
        })
      }
    );

    e.target.reset()
  };

  return (
    <>
      <Container>
        <StyledContainer>
          <Content>
            <h1>
              Jesteś zainteresowany którymś z naszych produktów? Zadzwoń do nas lub zostaw wiadomość!
            </h1>
            <h2>Kontakt:</h2>
            <h3>Tel. 606413531</h3>
            <h3>
              <Link href="mailto:kontakt@promiennikuv.pl">
                kontakt@promiennikuv.pl
              </Link>
            </h3>
          </Content>
            <StyledForm ref={form} onSubmit={sendEmail}>
              <label>Imię<Star>*</Star></label>
              <StyledInput type="text" name="user_name" placeholder='Imię' required/>
              <label>Email<Star>*</Star></label>
              <StyledInput type="email" name="user_email" placeholder='Email' required/>
              <label>Wiadomość<Star>*</Star></label>
              <textarea name="message" rows={10} cols={30} required/>
              <StyledButton type="submit" value="Wyślij!" />
            </StyledForm>
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
