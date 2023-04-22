import Menu from '../Menu/Menu';
import {
  ListItem,
  NavigationList,
  NavigationTitle,
  NavigationWrapper,
} from './styled';

export function Navigation() {
  return (
    <NavigationWrapper>
      <NavigationTitle>Sprzedaż, Serwis, Doradztwo Techniczne</NavigationTitle>
      <Menu />
      {/* <NavigationList>
        <ListItem to="/">Start</ListItem>
        <ListItem to="/promienniki">Promienniki IRT</ListItem>
        <ListItem to="/myjnie">Myjnie DRESTER</ListItem>
        <ListItem to="/kontakt">Kontakt</ListItem>
      </NavigationList> */}
    </NavigationWrapper>
  );
}
