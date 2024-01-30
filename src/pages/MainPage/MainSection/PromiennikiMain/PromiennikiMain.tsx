type PromiennikiProps = {
  promiennikiImg: string;
};

import {
  Content,
  ContentLeftButton,
  ContentLeftTitle,
  ContentList,
  ContentText,
  ContentWrapper,
  ListItem,
  MainImage,
} from './styled';
import { Link } from 'react-router-dom';

export function PromiennikiMain(props: PromiennikiProps) {
  return (
    <ContentWrapper>
      <Content>
        <ContentLeftTitle>Promienniki podczerwieni IRT</ContentLeftTitle>
        <ContentText>
          Produkcja promienników IRT rozpoczęła się od 1967 roku i do dnia
          dzisiejszego jest najbardziej zaawansowana technologicznie.
          Promienniki mobilne są stosowane głównie w lakierniach samochodowych.
        </ContentText>
        <ContentList>
          <ListItem>zaawansowana technologia</ListItem>
          <ListItem>nowatorskie rozwiązania</ListItem>
          <ListItem>krótkie czasy suszenia</ListItem>
          <ListItem>duża powierzchnia suszenia</ListItem>
          <ListItem>odbłyśniki FreeForm Reflectors są pokryte złotem</ListItem>
          <ListItem>niskie zużycie energii elektrycznej</ListItem>
          <ListItem>przyjazne dla środowiska</ListItem>
        </ContentList>
        <Link to="/promienniki">
          <ContentLeftButton>Zobacz więcej!</ContentLeftButton>
        </Link>
      </Content>
      <MainImage src={props.promiennikiImg} alt="Promienniki Alt" />
    </ContentWrapper>
  );
}
