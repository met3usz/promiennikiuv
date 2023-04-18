import { Container } from '../../common/Container/styled';
import { CardLeft, CardRight } from './Card/Card';
import { ContentWrapper } from './styled';
// import cardsContent from './irt-war.json';

import irt1 from '../../img/promienniki/irt1.png';
import irt2 from '../../img/promienniki/irt2.png';
import irt3 from '../../img/promienniki/irt3.png';
import irt4 from '../../img/promienniki/irt4.png';

function Promienniki() {
  return (
    <Container>
      <ContentWrapper>
        <h2>Zastosowania warsztatowe</h2>
        <div>
          {/* {cardsContent.map((item, index) => {
            if (index % 2 == 0) {
              return (
                <CardLeft
                  img={item.img}
                  imgAlt={item.imgAlt}
                  content={item.content}
                  title={item.title}
                  key={index}
                />
              );
            } else {
              return (
                <CardRight
                  img={item.img}
                  imgAlt={item.imgAlt}
                  content={item.content}
                  title={item.title}
                  key={index}
                />
              );
            }
          })} */}

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
            img={irt4}
            imgAlt="IRT UV SPOTCURE2"
            title="IRT UV SPOTCURE2"
            content="3 RAZY MOCNIEJSZY! Nasza najlepiej sprzedająca się gama UV LED rozszerza się o potężny SpotCure². Bezkonkurencyjne połączenie mocy i rozmiaru utwardzania. Przeniesienie bezpieczeństwa obsługi i komfortu użytkownika na nowy poziom. 132 diody LED dużej mocy."
          />
        </div>
      </ContentWrapper>
    </Container>
  );
}

export default Promienniki;
