import React from 'react';

import 'react-multi-carousel/lib/styles.css';
import './App.css';

import { BrowserRouter } from 'react-router-dom';
import { PageRoutes } from './pages/PageRoutes';


import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <div className="App">
       <QueryClientProvider client={queryClient}>
       <BrowserRouter basename={process.env.PUBLIC_URL}>
        <PageRoutes />
      </BrowserRouter>
       </QueryClientProvider>
    </div>
  );
}

export default App;
