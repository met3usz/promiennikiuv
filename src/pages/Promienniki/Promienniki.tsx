import { Container } from '../../common/Container/styled';
import { CardLeft, CardRight } from './Card/Card';
import { ContentWrapper } from './styled';
import cardsContent from './irt-war.json';

function Promienniki() {
  return (
    <Container>
      <ContentWrapper>
        <h2>Zastosowania warsztatowe</h2>
        <div>
          {cardsContent.map((item, index) => {
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
          })}
        </div>
      </ContentWrapper>
    </Container>
  );
}

export default Promienniki;
