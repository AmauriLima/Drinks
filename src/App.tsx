import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '@assets/styles/global';
import ligthTheme from '@assets/styles/themes/default';

import { MyRoutes } from './routes';

export function App() {
  return (
    <ThemeProvider theme={ligthTheme}>
      <GlobalStyle />
      <MyRoutes />
    </ThemeProvider>
  );
}
