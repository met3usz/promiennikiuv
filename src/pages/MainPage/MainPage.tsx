import HeroImg from '../../img/hero-img.png';
import {
  HeroButton,
  HeroImage,
  HeroLeft,
  HeroText,
  HeroTitle,
  HeroWrapper,
} from './styled';

const MainPage = () => {
  return (
    <HeroWrapper>
      <HeroLeft>
        <HeroTitle>Promienniki IRT i Myjnie DRESTER</HeroTitle>
        <HeroText>
          Firma Hedson Technologies AB jest producentem najwyższej klasy
          promienników podczerwieni przeznaczonych do szybkiego suszenia
          powierzchni lakierowanych z przeznaczeniem miedzy innymi do lakierni
          samochodowych.
        </HeroText>
        <HeroButton>Skontaktuj się z nami!</HeroButton>
      </HeroLeft>

      <HeroImage src={HeroImg} />
    </HeroWrapper>
  );
};

export default MainPage;
