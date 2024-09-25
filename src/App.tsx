import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navBar';
import Footer from './components/Footer';
import Home from './components/Home';
import Courses from './components/Courses';
import Grades from './components/Grades';
import Todos from './components/Todos';

function App() {
  const [grade, setGrade] = useState(0);


  
  function increment(): void {
    setGrade(prevGrade => prevGrade + 1);
  }

  function decrement(): void {
    setGrade(prevGrade => Math.max(0, prevGrade - 1)); // prevent negative grades
  }

    return (
    <div className="App">
      <Navbar />
      <Home />
      <Courses />
      <Grades grade={grade} onIncrement={increment} onDecrement={decrement} />  
      <Todos />
      <Footer />
      <header className="App-header"></header>
    </div>
  );
}

export default App;
