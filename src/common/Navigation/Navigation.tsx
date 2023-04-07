import {
  ListItem,
  NavigationList,
  NavigationTitle,
  NavigationWrapper,
} from './styled';

const Navigation = () => {
  return (
    <NavigationWrapper>
      <NavigationTitle>Sprzedaż, Serwis, Doradztwo Techniczne</NavigationTitle>
      <NavigationList>
        <ListItem>Start</ListItem>
        <ListItem>Promienniki IRT</ListItem>
        <ListItem>Myjnie DRESTER</ListItem>
        <ListItem>Kontakt</ListItem>
      </NavigationList>
    </NavigationWrapper>
  );
};

export default Navigation;
