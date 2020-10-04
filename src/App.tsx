import Axios from 'axios';
import React, { useState } from 'react';
import './App.css';
import LoadingSpinner from './components/loading-spinner/loading-spinner';
import PortfolioLayout from './components/portfolio-layout/portfolio-layout';

const App = () => {
  const [load, setLoad] = useState(false);
  Axios.interceptors.request.use(request => {
    setLoad(true);
    return request;
  });

  Axios.interceptors.response.use(response => {
    setLoad(false);
    return response;
  }, error => {
    setLoad(false);
    throw error;
  })
  
  return (
    <div>
      <LoadingSpinner loading={load} />
      <PortfolioLayout/>
    </div>
  )
}

export default App
