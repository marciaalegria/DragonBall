import React from 'react';
import { DataProvider } from './context/DataContext';
import './App.css';
import { AppRouter } from './routes/AppRouter';

function App() {
  return (
    <DataProvider>
    <div className="App">
      <AppRouter/>
    </div>      
    </DataProvider>

  );
}

export {App};
