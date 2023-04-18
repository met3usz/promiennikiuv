type CardProps = {
  img: string;
  imgAlt: string;
  title: string;
  content: string;
};

import { CardContent, CardText, CardTitle, CardWrapper } from './styled';

export const CardLeft = (props: CardProps) => {
  return (
    <CardWrapper>
      <img src={props.img} alt={props.imgAlt} />
      <CardContent>
        <CardTitle>{props.title}</CardTitle>
        <CardText>{props.content}</CardText>
      </CardContent>
    </CardWrapper>
  );
};

export const CardRight = (props: CardProps) => {
  return (
    <CardWrapper>
      <CardContent>
        <CardTitle>{props.title}</CardTitle>
        <CardText>{props.content}</CardText>
      </CardContent>
      <img src={props.img} alt={props.imgAlt} />
    </CardWrapper>
  );
};
