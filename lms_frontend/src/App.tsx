import React from 'react';
import './App.css';
import Home from "./pages/Home/home/Home";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
};

export default App;




//Remove-Item -Recurse -Force node_modules
//npm install
