import { PromiennikiMain } from './PromiennikiMain/PromiennikiMain';
import { MyjnieMain } from './MyjnieMain/MyjnieMain';
import { MainWrapper } from './styled';

import promiennikiImg from '../../../img/promienniki.png';
import myjnieImg from '../../../img/myjnie.png';

export function Main() {
  return (
    <MainWrapper>
      <PromiennikiMain promiennikiImg={promiennikiImg} />
      <MyjnieMain myjnieImg={myjnieImg} />
    </MainWrapper>
  );
}
