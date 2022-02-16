import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string,
      danger: string,
      primary: {
        main: string;
        dark: string;
      },
      gray: {
        1000: string,
        900: string,
        800: string,
        500: string,
        300: string,
      },
    }
  }
}
