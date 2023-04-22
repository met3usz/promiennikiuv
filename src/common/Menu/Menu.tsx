import { useState } from 'react';
import Hamburger from './Hamburger';
import { StyledMenu, MobileLink } from './styled';

const Menu = () => {
  const [open, setOpen] = useState<boolean>(false);
  const close = () => setOpen(false);
  return (
    <div>
      <StyledMenu open={open}>
        <MobileLink onClick={() => close()} to="/">
          Start
        </MobileLink>
        <MobileLink onClick={() => close()} to="/promienniki">
          Promienniki IRT
        </MobileLink>
        <MobileLink onClick={() => close()} to="/myjnie">
          Myjnie DRESTER
        </MobileLink>
        <MobileLink onClick={() => close()} to="/kontakt">
          Kontakt
        </MobileLink>
      </StyledMenu>
      <Hamburger open={open} setOpen={setOpen} />
    </div>
  );
};

export default Menu;
