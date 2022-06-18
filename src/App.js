// import logo from './logo.svg';
import React, { useState } from 'react';
import Alert from './components/Alert';

import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light')

  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = 'grey';
      showalert("Dark mode has been enabled", "success")
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light mode has been enabled", "success")
    }
  }
  const [alert, setalert] = useState(null)

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 3000);

  }

  return (
    <>

   <Router>
      <Navbar title="harry bhai" mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>

          <Route exact path="/about" element={<About mode={mode} />}>
            
          </Route>

          <Route exact path="/" element={<Textform heading="Enter text to analize" mode={mode} showalert={showalert}/>}>



          </Route>
        </Routes>


      </div>
      </Router>
    </>
  );
}

export default App;
