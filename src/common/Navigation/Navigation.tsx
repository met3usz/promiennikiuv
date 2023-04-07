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
        <ListItem to="/">Start</ListItem>
        <ListItem to="/promienniki">Promienniki IRT</ListItem>
        <ListItem to="/myjnie">Myjnie DRESTER</ListItem>
        <ListItem to="/kontakt">Kontakt</ListItem>
      </NavigationList>
    </NavigationWrapper>
  );
};

export default Navigation;
