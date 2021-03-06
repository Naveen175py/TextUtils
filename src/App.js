
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


// import About from './components/About';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert]=useState(null);
  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(()=>{
        setAlert(null);
      },2000);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='black';
      showAlert("Dark mode has been enabled","success");
      document.title='TextUtils - Dark Mode';
    }
    else{
      setMode('light') 
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      document.title='TextUtils - Light Mode';
    }
  }
  return (
    <>
    <Router>
      <Navbar title="Cool Text App" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <TextForm showAlert={showAlert} heading="Enter the text to analyse" mode={mode}  />
        </Route>
      </Routes>
      </div>
      </Router>
    </>
  );
}
 
export default App;
