import { ChakraProvider, ColorModeScript, theme } from '@chakra-ui/react';
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <React.Fragment>
    <ColorModeScript />
    <ChakraProvider resetCSS theme={theme}>
      <BrowserRouter>
        <GoogleOAuthProvider clientId="631900387292-10e8t0hpvffufnnepfig6jhrbu2v2e1v.apps.googleusercontent.com">
          <App />
        </GoogleOAuthProvider>
      </BrowserRouter>
    </ChakraProvider>
  </React.Fragment>
);
