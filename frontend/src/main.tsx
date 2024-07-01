import MaterialThemeProvider, { theme } from "./pages/material-theme";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import MainPageContent from "./pages/main-page/MainPage";
import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPageContent />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MaterialThemeProvider>
      <RouterProvider router={router} />
    </MaterialThemeProvider>
  </React.StrictMode>
);
