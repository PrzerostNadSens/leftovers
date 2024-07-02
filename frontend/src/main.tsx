import MainRouter from "./providers/main-router";
import MaterialThemeProvider from "./providers/material-theme";
import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MaterialThemeProvider>
      <MainRouter />
    </MaterialThemeProvider>
  </React.StrictMode>
);
