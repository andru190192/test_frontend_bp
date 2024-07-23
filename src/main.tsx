import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Compose, IComposeProps } from 'utils/index.tsx'
import { QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import router from 'config/router/index.tsx'
import { queryClient } from 'config/react-query/index.ts'

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