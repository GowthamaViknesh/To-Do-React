import React from "react"
import './App.css'
import TodoWrapper from "./components/TodoWrapper";
import HeaderPage from './components/header'

function App() {

  return (
    <div className="App">
      <HeaderPage />
      <TodoWrapper />
    </div>
  );
}

export default App;
