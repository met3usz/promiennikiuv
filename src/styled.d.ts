import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    color: {
      bgColor: string;
      buttonText: string;
      primaryIRT: string;
      primatyDrester: string;
      secondaryText: string;
      primaryText: string;
    };
  }
}
