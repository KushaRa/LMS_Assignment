import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
//import BookTable from './pages/bookTable/BookTable';
import EditBook from './pages/editBook/EditBook';
import Home from "./pages/Home/home/Home";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit-book/:id" element={<EditBook />} />
      </Routes>
    </Router>
  );
};

export default App;




//Remove-Item -Recurse -Force node_modules
//npm install
