import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string,
      danger: string,
      gray: {
        800: string,
        600: string,
        500: string,
      },
    }
  }
}
