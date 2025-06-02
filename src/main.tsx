import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import Header from 'components/Header/Header';
import App from './app/App.tsx';
import { Provider } from 'react-redux';
import { store } from './app/store';
import 'shared/translation/i18next';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
