import React from 'react';
import logo from './logo.svg';
import { DataTable } from './features/DataTable/DataTable';
import './App.css';
import { SideBar } from './features/Sidebar/sidebar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-container">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </header>
      <div className="body">
        <div className="body-item-left">
          <SideBar />
        </div>
        <div className="body-item-right">
          <DataTable />
        </div>
      </div>
    </div>
  );
}

export default App;
