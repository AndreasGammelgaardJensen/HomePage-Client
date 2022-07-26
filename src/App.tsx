import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Layout from './Components/Layout';
import Projects from './Pages/Projects';
import ToDoApp from './InProjects/TODO/ToDoApp';
import { TicTacToeApp } from './InProjects/TICTACTOE/TicTacToeApp';


function App() {
  return (
    
        <Routes>
            <Route path="/" element={<Layout />} >
              <Route path="about" element={<About/>} />
              <Route path="/home" element={<Home/>} /> 
              <Route path="projects" element={<Projects/>} />
            </Route>
            <Route path="/projectsm/" >
              <Route path="todo" element={<ToDoApp/>} />
              <Route path="TicTacToe" element={<TicTacToeApp/>} /> 
              
            </Route>
        </Routes>

      
    
  )
  
}

export default App;
