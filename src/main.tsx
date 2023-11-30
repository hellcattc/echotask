import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './routes/Root'
import Layout from './routes/Layout'
import { Provider } from 'react-redux'
import store from './store/store'
import AddTask from './routes/AddTask/AddTask'
import CreateTemplate from './routes/AddTemplate/CreateTemplate'
import ROUTES from './types/Routes'
import EditTask from './routes/EditTask/EditTask'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: ROUTES.INDEX.path,
        element: <Root />,
        children: [
          { path: ROUTES.INDEX.ADD_TASK.path, element: <AddTask /> },
          { path: ROUTES.INDEX.EDIT_TASK.path, element: <EditTask /> },
        ],
      },
      {
        path: ROUTES.CREATE_TEMPLATE.path,
        element: <CreateTemplate />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
