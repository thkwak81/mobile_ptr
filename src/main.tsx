import React from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  	<BrowserRouter basename={"/mobile_ptr"}>
  		<App />
  	</BrowserRouter>
  </React.StrictMode>,
);
