import { AuthProvider } from './providers/auth-provider';
import MainRouter from './providers/main-router';
import MaterialThemeProvider from './providers/material-theme';
import QueryProvider from './providers/query-provider';
import React from 'react';
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MaterialThemeProvider>
      <QueryProvider>
        <AuthProvider>
          <MainRouter />
        </AuthProvider>
      </QueryProvider>
    </MaterialThemeProvider>
  </React.StrictMode>,
);
