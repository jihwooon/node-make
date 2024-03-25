import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { router } from './router';
import './App.css';
import { RouterProvider } from 'react-router-dom';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}> 
      <RouterProvider router={router}/>
    </QueryClientProvider>
  )
}

export default App;
