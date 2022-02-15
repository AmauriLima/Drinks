import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '@assets/styles/global';
import ligthTheme from '@assets/styles/themes/default';

import { persistor, store } from './redux/store';
import { MyRoutes } from './routes';

export function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <ThemeProvider theme={ligthTheme}>
          <GlobalStyle />
          <MyRoutes />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
