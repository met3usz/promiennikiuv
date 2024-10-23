import { Tooltip } from '@mui/material';
import { CardLeft, CardRight } from './Card/Card';
import { ContentWrapper, SectionTitle } from './styled';
import { Container } from '../../common/Container/styled';
import Footer from '../../common/Footer/Footer';

import irt1 from '../../img/promienniki/irt1.png';
import irt2 from '../../img/promienniki/irt2.png';
import irt3 from '../../img/promienniki/irt3.png';
import irt5 from '../../img/promienniki/irt5.png';
import irt6 from '../../img/promienniki/irt6.png';
import irt7 from '../../img/promienniki/irt7.png';
import irt8 from '../../img/promienniki/irt8.png';
import irt9 from '../../img/promienniki/irt9.png';

import catalog from '../../img/catalog.svg';

function Promienniki() {
  return (
    <>
      <Container>
        <ContentWrapper>
          <div>
            <a href="https://bit.ly/3UjTQNe" target="_blank">
              <Tooltip title="Zobacz katalog" arrow placement="top">
                <img
                  src={catalog}
                  alt="Free Catalog Icon by Ibm-design"
                  width="50px"
                />
              </Tooltip>
            </a>
          </div>
          {/* Free Catalog Icon by Ibm-design */}
          <SectionTitle>Zastosowania warsztatowe</SectionTitle>
          <div>
            <CardLeft
              img={irt1}
              imgAlt="IRT 4-1 & 4-2 PcAuto"
              title="IRT 4-1 & 4-2 PcAuto"
              content="Mobilne promienniki serii IRT 4-1 Pc Auto, 4-2 Pc Auto są wyposażone w jedną lub dwie kompaktowe kasety. Każda z kaset zaopatrzona jest w 4 lampy emitujące promieniowanie podczerwone z zakresu fal krótkich (IR), wraz z pozłacanymi reflektorami i wentylatorami. Zastosowanie siłownika gazowego znacznie ułatwia dokładne pozycjonowanie całej kasety. Moc : 6 -12kW"
            />
            <CardRight
              img={irt2}
              imgAlt="IRT 3-1 & 3-2 PcD"
              title="IRT 3-1 & 3-2 PcD"
              content="Promiennik przeznaczony jest do napraw lakierniczych o małych oraz średnich powierzchniach. Stosowanie promiennika przyspiesza proces suszenia materiałów lakierniczych od szpachli, podkładu, baz wodnych i konwencjonalnych po lakier nawierzchniowy. Ma zastosowanie zarówno wobec produktów na bazie rozpuszczalników jak i wodnych. Zakres użycia urządzenia obejmuje przygotowanie oraz wykończenie powierzchni. Moc : 3-6kW"
            />
            <CardLeft
              img={irt3}
              imgAlt="IRT UV SmartCure"
              title="IRT UV SmartCure"
              content="Firma IRT połączyła lata doświadczeń w projektowaniu i produkcji promienników IR i UV z najnowszymi technologiami UV LED. Wszystkie części w urządzeniu są specjalnie zaprojektowane tak, aby zmaksymalizować wydajność i wygodę użytkownika. IRT UV SmartCure to bezprzewodowe, akumulatorowe urządzenie o najwyższej wydajności w kategorii urządzeń przenośnych."
            />
            <CardRight
              img={irt7}
              imgAlt="IRT UV SPOTCURE2"
              title="IRT UV SPOTCURE2"
              content="3 RAZY MOCNIEJSZY! Nasza najlepiej sprzedająca się gama UV LED rozszerza się o potężny SpotCure². Bezkonkurencyjne połączenie mocy i rozmiaru utwardzania. Przeniesienie bezpieczeństwa obsługi i komfortu użytkownika na nowy poziom. 132 diody LED dużej mocy."
            />
          </div>
        </ContentWrapper>
        <ContentWrapper>
          <div>
            <a
              href="https://drive.google.com/file/d/1RjXO4NH6khHBAwsXPWLa-KAcn8CaHXLQ/view"
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
          <SectionTitle>Zastosowania przemysłowe</SectionTitle>
          <div>
            <CardLeft
              title="IRT Systemy trawersowe"
              img={irt5}
              imgAlt="IRT Systemy trawersowe"
              content="Modułowa kombinacja pojedynczych kaset umożliwia jednoczesną obróbkę większych powierzchni i uszkodzeń miejscowych"
            />
            <CardRight
              img={irt6}
              imgAlt="IRT Booster"
              title="IRT Booster"
              content="Inwestycja zwraca się od 6-12 m-cy – zwiększenie tempa produkcji, eliminacja przestojów.
            Elastyczne miejsce instalacji."
            />

            <CardLeft
              img={irt9}
              imgAlt="IRT SingleHeater"
              title="IRT SingleHeater"
              content="Dzięki SingleHeater budujemy proste, precyzyjne, wydajne i kompaktowe promienniki ciepła o niskim zużyciu energii."
            />

            <CardRight
              img={irt8}
              imgAlt="IRT DTP"
              title="IRT DTP"
              content="Doskonały rezultat suszenia do 200°C. Wszystkie promienniki dostępne są również z dwiema kasetami."
            />
          </div>
        </ContentWrapper>
      </Container>
      <Footer />
    </>
  );
}

export default Promienniki;
