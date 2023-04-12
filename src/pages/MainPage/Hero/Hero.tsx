import { Link } from 'react-router-dom';
import {
  HeroButton,
  HeroImage,
  HeroLeft,
  HeroText,
  HeroTitle,
  HeroWrapper,
} from './styled';

type HeroProps = {
  HeroImg: string;
};

export function Hero({ HeroImg }: HeroProps) {
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
        <Link to="/kontakt">
          <HeroButton>Skontaktuj się z nami!</HeroButton>
        </Link>
      </HeroLeft>

      <HeroImage src={HeroImg} />
    </HeroWrapper>
  );
}
