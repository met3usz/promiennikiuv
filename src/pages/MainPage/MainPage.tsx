import { Hero } from './Hero/Hero';
import HeroImg from '../../img/main_hero.png';
import { Main } from './MainSection/Main';
import { Container } from '../../common/Container/styled';
import Footer from '../../common/Footer/Footer';

export function MainPage() {
  return (
    <>
      <Container>
        <Hero HeroImg={HeroImg} />
        <Main />
      </Container>
      <Footer />
    </>
  );
}
