import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../layout/Layout.tsx'
import { Main } from '../layout/sections/main/Main.tsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/main', element: <Main /> },
      { path: '/main', element: <Main /> },
      { path: '/main', element: <Main /> },
      { path: '/main', element: <Main /> },
    ],
  },
])
