import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from 'config/react-query';
import router from 'config/router';
import { Compose, IComposeProps } from 'utils';
import './index.css'

const providers: IComposeProps['providers'] = [
  [QueryClientProvider, { client: queryClient }],
];

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Compose providers={providers}>
      <RouterProvider router={router} />
    </Compose>
  </React.StrictMode>,
)
