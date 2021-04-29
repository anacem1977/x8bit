import './App.css';
import React, { useState } from "react";

import Roles from "./components/roles/roles"

function App() {
  return (
    <div className="App">
      <header className="entreLogo">
        <nav>
          <h1>ENTRE</h1>
        </nav>
      </header>
      <section className="subtitle">
        <p className="circle one">1</p>
        <p className="circle">2</p>
        <p className="circle">3</p>
        <p className="pages one">Roles</p>
        <p className="pages">Industry</p>
        <p className="pages">Goals</p>
      </section>
      <Roles/>
    </div>
  );
}

export default App;
