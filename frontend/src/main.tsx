import React from 'react';
import ReactDOM from 'react-dom/client';

import MainRouter from './providers/main-router';
import MaterialThemeProvider from './providers/material-theme';
import QueryProvider from './providers/query-provider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MaterialThemeProvider>
      <QueryProvider>
        <MainRouter />
      </QueryProvider>
    </MaterialThemeProvider>
  </React.StrictMode>,
);
