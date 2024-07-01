import { RouterProvider, createBrowserRouter } from "react-router-dom";

import MainPageContent from "./pages/main-page/MainPage";
import React from "react";
import ReactDOM from "react-dom/client";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPageContent />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
