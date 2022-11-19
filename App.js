import * as React from 'react';
import AppRoutes from './Views/AppRoutes'

import MockAPI from './Utils/MockAPI.ts';

const _mockAPI = new MockAPI(window)

if (window.server) {
  // _mockAPI.stop()
}

_mockAPI.start();


export default function App() {
  return (
    <AppRoutes />
  );
}