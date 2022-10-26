import "./App.css";
import { RootRouter } from "./routes/RootRouter";
import React, { Suspense } from 'react';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <div>
        <Suspense fallback={<>Loading...</>}>
          <RootRouter />
        </Suspense>
      </div>
    </HashRouter>
  );
}

export default App;
