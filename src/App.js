import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DropboxAuthorization from './pages/DropboxAuthorization';
import DropboxRedirect from './pages/DropboxRedirect';

function App() {
  return (
    <Routes>
      <Route path="/dropbox/authorize" element={<DropboxAuthorization />} />
      <Route path="/dropbox/authorize/redirect" element={<DropboxRedirect />} />
    </Routes>
  );
}

export default App;
