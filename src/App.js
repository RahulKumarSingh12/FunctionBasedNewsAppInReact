import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App =(props)=> {
  // c='Jhon';

  const pageSize = 6;

  const [progress,setProgress]=useState(0);

    return (
      // <div>
      //   Hello my first class based component {c}
      //Key is given for mounting in such a way so that it can be remounted as well 
      // </div>
      <div>
        <Router>
          <LoadingBar
            color='#f11946'
            progress={progress}
          />
          <Navbar />
          <Routes>
            <Route exact path='/' element={<News  setProgress={setProgress} key="general" pageSize={pageSize} country="us" category="general" />} />
            <Route exact path='/sports' element={<News  setProgress={setProgress} key="sports" pageSize={pageSize} country="us" category="sports" />} />

            <Route exact path='/entertainment' element={<News  setProgress={setProgress} key="entertainment" pageSize={pageSize} country="us" category="entertainment" />} />
            <Route exact path='/general' element={<News  setProgress={setProgress} key="general" pageSize={pageSize} country="us" category="general" />} />
            <Route exact path='/health' element={<News  setProgress={setProgress} key="buisness" pageSize={pageSize} country="us" category="health" />} />
            <Route exact path='/science' element={<News  setProgress={setProgress} key="science" pageSize={pageSize} country="us" category="science" />} />
            <Route exact path='/technology' element={<News  setProgress={setProgress} key="health" pageSize={pageSize} country="us" category="technology" />} />
            <Route exact path='/buisness' element={<News  setProgress={setProgress} key="buisness" pageSize={pageSize} country="us" category="business" />} />
          </Routes>
        </Router>
      </div>
    )
   
}

export default App;


//rcc react class based component 
