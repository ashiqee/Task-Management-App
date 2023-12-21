import React from 'react'
import {

  RouterProvider,
} from "react-router-dom";
import ReactDOM from 'react-dom/client'
import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import './index.css'
import router from './Root/Router.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';


const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


    <AuthProvider>
      <DndProvider backend={HTML5Backend}>

        <QueryClientProvider client={queryClient} >

          <RouterProvider router={router} />

        </QueryClientProvider>
      </DndProvider>


    </AuthProvider>


  </React.StrictMode>,
)
