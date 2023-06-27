import React from 'react';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// sintaxis para react 18
import { createRoot } from 'react-dom/client';
import { StoreProvider } from './Store';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <StoreProvider>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StoreProvider>
);
