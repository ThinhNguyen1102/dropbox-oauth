import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DropboxAuthorization from './pages/DropboxAuthorization';
import DropboxRedirect from './pages/DropboxRedirect';
import GoogleAuthorization from './pages/GoogleAuthorization';
import GoogleRedirect from './pages/GoogleRedirect';
import GoogleLogin from './pages/GoogleLogin';

function App() {
  return (
    <Routes>
      <Route path="/dropbox/authorize" element={<DropboxAuthorization />} />
      <Route path="/dropbox/authorize/redirect" element={<DropboxRedirect />} />
      <Route path="/google/authorize" element={<GoogleAuthorization />} />
      <Route path="/google/authorize/redirect" element={<GoogleRedirect />} />
      <Route path="/cloud" element={<GoogleLogin />} />
    </Routes>
  );
}

export default App;
