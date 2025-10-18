// 🔧 Core React
import React from 'react';

// 🌐 Routing
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// 🧩 Pages
import Home from './pages/Home';
import ToDo from './pages/ToDo';
import Contact from './pages/Contact';

// 🧱 Components
import Layout from './components/Layout';

// 🎨 Styles
// import './ComponentName.module.css';



function App() {

  return (
    <>
      <BrowserRouter basename="/todo-app">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="todo" element={<ToDo />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
