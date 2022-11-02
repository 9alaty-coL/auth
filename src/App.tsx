import "./App.css";
import { RootRouter } from "./routes/RootRouter";
import React, { Suspense } from 'react';
import { HashRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

// Create a client
const queryClient = new QueryClient()

function App() {
  return (
    <HashRouter>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<>Loading...</>}>
          <RootRouter />
        </Suspense>
      </QueryClientProvider>
    </HashRouter>
  );
}

export default App;
