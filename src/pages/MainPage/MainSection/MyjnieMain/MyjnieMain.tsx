type MyjnieProps = {
  myjnieImg: string;
};

import {
  Content,
  ContentList,
  ContentRightButton,
  ContentRightTitle,
  ContentText,
  ContentWrapper,
  ListItem,
  MainImage,
} from './styled';
import { Link } from 'react-router-dom';

export function MyjnieMain(props: MyjnieProps) {
  return (
    <ContentWrapper>
      <MainImage src={props.myjnieImg} />
      <Content>
        <ContentRightTitle>
          Myjnie pistoletów lakierniczych DRESTER
        </ContentRightTitle>
        <ContentText>
          Firma Hedson Technologies AB jest producentem myjni pistoletów
          lakierniczych Drester serii Boxer. Seria Boxer oferuje myjnie
          wytrzymałe i uniwersalne, proste w obsłudze, zapewniające jeszcze
          lepsze i wydajniejsze mycie pistoletów lakierniczych.
        </ContentText>
        <ContentList>
          <ListItem>
            automatyczne i ręczne mycie pistoletów lakierniczych
          </ListItem>
          <ListItem>
            używana z rozpuszczalnikiem, wodą i rozpuszczalnikami wodnymi
            (Drester Aquasolve)
          </ListItem>
        </ContentList>
        <Link to="myjnie">
          <ContentRightButton>Zobacz więcej!</ContentRightButton>
        </Link>
      </Content>
    </ContentWrapper>
  );
}
