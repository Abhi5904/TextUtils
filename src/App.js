import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About'
import Alert from './components/Alert'
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';


function App() {

  const [darkmode, setDarkmode] = useState('light')

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      mesg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }
  const togglemode = () => {
    if (darkmode === "light") {
      setDarkmode('dark')
      document.body.style.backgroundColor = 'rgb(19,22,24,1)'
      showAlert("Dark mode has been enable", "success")
    }
    else {
      setDarkmode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enable", "success")
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={darkmode} togglemode={togglemode} />
      <Alert alert={alert} />
      <div className="container">
        <Routes>
          <Route exact path="/" element={ <TextForm heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={darkmode} showAlert={showAlert} />}/>  
          <Route exact path="/about" element={<About mode={darkmode} />}/>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
