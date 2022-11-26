import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './routes/app.routes';
import GlobalStyle from './styles.global';
import { history } from './history';
import { HistoryRouter } from './HistoryRouter';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <HistoryRouter history={history}>
    <React.StrictMode>
      <GlobalStyle />
      <AppRoutes />
    </React.StrictMode>
  </HistoryRouter>
);