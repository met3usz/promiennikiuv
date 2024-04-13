import { Tooltip } from '@mui/material';
import { Content, ContentWrapper, Images, List } from './styled';
import { Container } from '../../common/Container/styled';
import { Image } from '../../common/Image/styled';
import Footer from '../../common/Footer/Footer';

import dres1 from '../../img/myjnie/test-DoubleS-1000x640-1.jpg';
import dres2 from '../../img/myjnie/gc_classic-3600_1000x1000.png';
import dres3 from '../../img/myjnie/gc_dc11_1000x1000.png';
import dres4 from '../../img/myjnie/gc_dix11M_1000x1000.png';

import catalog from '../../img/catalog.svg';
import { StyledHeader } from '../../common/StyledHeader/styled';
import { Link } from '../Myjnie/styled';

function Myjnie() {
  return (
    <>
      <Container>
        <StyledHeader>
          Nowość! Seria Boxer została zastąpiona serią Ace! Zobacz najnowszy{' '}
          <Link
            href="https://drive.google.com/file/d/1VFgyAssB04-SI2vEyHu8ll4GxxdBN57K/view?usp=sharing"
            target="_blank"
          >
            katalog
          </Link>
        </StyledHeader>
        <ContentWrapper>
          <div>
            <a
              href="https://drive.google.com/file/d/1VFgyAssB04-SI2vEyHu8ll4GxxdBN57K/view?usp=sharing"
              target="_blank"
            >
              <Tooltip title="Zobacz katalog" arrow placement="top">
                <img
                  src={catalog}
                  alt="Free Catalog Icon by Ibm-design"
                  width="50px"
                />
              </Tooltip>
            </a>
          </div>
          <div>
            <Content>
              Odkąd opracowano pierwszą na świecie myjnię pistoletu
              lakierniczego, Drester wyznacza standardy dla sprzętu
              przeznaczonego do czyszczenia pistoletów lakierniczych. Poprzez
              ciągłe inwestycje w rozwój produktów i doświadczenie pracowników,
              zakres urządzeń myjących ewoluował i stał się bardziej
              wyrafinowany i efektywny. Z wieloletnim doświadczeniem w
              projektowaniu i produkcji skomplikowanych elementów, Drester
              stworzył doskonałą gamę kluczowych komponentów, specjalnie
              zaprojektowanych do wykorzystania w procesie mycia pistoletów
              lakierniczych. Drester nadal podnosi poprzeczkę, a wszystkie
              myjnie zapewniają niezrównaną jakość i wydajność. Po dokładnych
              badaniach Drester zaoferował dwie serie urządzeń myjących
              pistolety lakiernicze; nową serię Ace i klasyczną serię. Seria Ace
              zaprojektowana została z myślą zaspokojenia wszystkich potrzeb
              wymagających klientów. Seria myjni klasycznych od wielu lat cieszy
              się uznaniem klientów na całym świecie. Po więcej informacji
              zapraszam do kontaktu.
            </Content>
            <Content>
              Firma Hedson Technologies AB jest producentem myjni pistoletów
              lakierniczych Drester serii Ace. Seria Ace oferuje myjnie
              wytrzymałe i uniwersalne, proste w obsłudze, zapewniające jeszcze
              lepsze i wydajniejsze mycie pistoletów lakierniczych. Modele Ace
              występują w dwóch rozmiarach kompaktowym i pełnowymiarowym,
              zapewniającym dogodne warunki pracy w lakierni każdego dnia. Ace
              oferuje modele dla wszystkich potrzeb warsztatu lakierniczego :
            </Content>
            <List>
              <li>automatyczne i ręczne mycie pistoletów lakierniczych</li>
              <li>
                używana z rozpuszczalnikiem, wodą i rozpuszczalnikami wodnymi
                (Drester Aquasolve)
              </li>
            </List>
          </div>
          <Images>
            <Image src={dres1} />
            <Image src={dres2} />
            <Image src={dres3} />
            <Image src={dres4} />
          </Images>
        </ContentWrapper>
      </Container>
      <Footer />
    </>
  );
}

export default Myjnie;
