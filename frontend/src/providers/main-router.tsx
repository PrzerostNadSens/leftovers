import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from '../App';
import MainPageContent from '../pages/main-page/main-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <MainPageContent />,
      },
    ],
  },
]);

const MainRouter = () => {
  return <RouterProvider router={router} />;
};

export default MainRouter;
