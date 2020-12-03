import React from 'react';
import './App.scss';
import AppRouter from './extension_ui/components/app-router.component';
import { WordStateProvider, FilterStateProvider } from './extension_ui/state/state';

function App() {
  return (
    <div className="App">
      <WordStateProvider>
        <FilterStateProvider>
          <AppRouter />
        </FilterStateProvider>
      </WordStateProvider>
    </div>
  );
}

export default App;
