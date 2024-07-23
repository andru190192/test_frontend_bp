import { createBrowserRouter } from 'react-router-dom';
import App from 'App';
import Home from 'pages/Home';
import CreateProduct from 'pages/CreateProduct';


const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'product',
        element: <CreateProduct />,
      },
      // {
      //   path: 'product/:id',
      //   element: <UpdateProduct />,
      // },
    ],
  },
]);

export default router;
