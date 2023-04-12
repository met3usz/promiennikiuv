import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    color: {
      bgColor: string;
      buttonText: string;
      primaryIRT: string;
      primaryDrester: string;
      secondaryText: string;
      primaryText: string;
    };
  }
}
