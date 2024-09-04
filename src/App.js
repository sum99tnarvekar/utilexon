import './App.css';
import Textform from './components/Textform';
import Navbar from './components/Navbar';
import React,{ useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [alertStyle , setAlertStyle] = useState(null)
  const [alertMessage , setAlertMessage] = useState(null)
  const [mode , setModeStyle] = useState({
    backgroundColor: "#e3f2fd",
    color: "black"
  })

  const showAlert = (alertStyleMode , message) => {
    setAlertStyle(alertStyleMode)
    setAlertMessage(message)
    setTimeout(() => {
      setAlertStyle(null)
    }, 2000)
  }

  const toggleMode = () => {
    if(mode.backgroundColor === "#e3f2fd"){
      setModeStyle({
        backgroundColor: "black",
        color: "white"
      })
      document.body.style.backgroundColor = "#370c6a"
      showAlert("dark" , "Dark Mode is enabled successfully.")
    }else{
      setModeStyle({
        backgroundColor: "#e3f2fd",
        color: "black"
      })
      document.body.style.backgroundColor = "white"
      showAlert("success" , "Dark Mode is disabled successfully.")
    }
  }

  return (
    <>
    <Router>
      <Navbar title="Utilexon" mode={mode} toggleMode={toggleMode}/>
      <Alert type={alertStyle} alertMessage={alertMessage}/>
      <div className='container'>
      <Routes>
          <Route path="/about" element={<About />} />
          {/* <Route path="/">
          <Textform mode={mode} textlabel="Enter your content here..." />
          </Route> */}
                      <Route path="/" element={<Textform mode={mode} textlabel="Enter your content here..." />} />

        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
