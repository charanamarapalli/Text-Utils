import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/ShowAlert';
import Textform from './components/Textform';
import About from './components/About';
import React, {useState} from 'react';
import {BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [aboutMyStyle, setaboutMyStyle] = useState({
    color: 'rgba(33, 37, 41, 1)',
    backgroundColor: 'white',
  });
  const [alert, setAlert] = useState(null);
 
  
  const changeToggle =() => {
    if(mode==='light'){
      setMode("dark");
      setaboutMyStyle({
          color: 'white',
          backgroundColor: 'rgba(33, 37, 41, 1)',
      });
      document.body.style.backgroundColor='rgba(33, 37, 41, 1)';
      showtheAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode("light");
      setaboutMyStyle({
          color: 'rgba(33, 37, 41, 1)',
          backgroundColor: 'white',
      });
      document.body.style.backgroundColor='white';
      showtheAlert("Light mode has been enabled", "success");
    }   
  }
  

  const showtheAlert =(message, type)=>{
    setAlert({message: message, type:type});

     setTimeout(() => {
      setAlert(null)
    }, 1500); 
  }

  return (
    <>
    <BrowserRouter>
    <Navbar title = "TextUtils" about='About Us' dropdownName='Add Section' home='Home' mode ={mode} changeToggle ={changeToggle} />
    <Alert alert = {alert}/>
    
    {/* <About /> */}

    <Routes>
       <Route path="/about" element={<About changeToggle ={changeToggle} aboutMyStyle={aboutMyStyle}/>}/>
    </Routes>

    <Routes>
       <Route path="/" element={<Textform heading = "Enter text to analyze below" mode={mode} 
       showtheAlert={showtheAlert} /> }/>
    </Routes>

   </BrowserRouter>
   </>
  );
 
}

export default App;
