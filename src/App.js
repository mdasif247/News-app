import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import PropTypes from 'prop-types'
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App=()=>{
   const[progress,setProgress]=useState(0);
    
     return (
      <Router>
        <div>
        <LoadingBar
          color='red'
          progress={progress}
      />
        <Navbar/>
        <Routes>
          <Route path="/home" element={<News setProgress={setProgress}pagesize="8" key ="home" country="in" category="general"/>} />
          <Route path="/business" element={<News setProgress={setProgress}pagesize="8" key="business" country="in" category="business"/>}/>
          <Route path="/entertainment" element={<News setProgress={setProgress}pagesize="8" key="entertainment" country="in" category="entertainment"/>}/>
          <Route path="/general" element={<News setProgress={setProgress}pagesize="8" key="general" country="in" category="general"/>}/>
          <Route path="/health" element={<News setProgress={setProgress}pagesize="8" key="health" country="in" category="health"/>}/>
          <Route path="/science" element={<News setProgress={setProgress}pagesize="8" key="science" country="in" category="science"/>}/>
          <Route path="/sports" element={<News setProgress={setProgress}pagesize="8" key="sports" country="in" category="sports"/>}/>
          <Route path="/technology" element={<News setProgress={setProgress}pagesize="8" key="technology" country="in" category="technology"/>}/>

        </Routes>
        </div>
      </Router>
    )
  }
App.propTypes={
  country: PropTypes.string,
  category: PropTypes.string
}
App.defaultProps={
  country:"in"
}
export default App