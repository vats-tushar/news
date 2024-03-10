import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import{
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar';
import BottomOptions from './components/BottomOptions';

const App =()=> {
  const pageSize=6;
  const apiKey=process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);
  const [mode, setMode] = useState('light');
    

  const setprogress = (progress)=>{
    setProgress(progress);
  }
  const toggleMode=()=>{
    console.log(mode);
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#1f1f1f';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
    return (
      <div>
        <Router basename='/news'>
          <LoadingBar
            color='#f11946'
            progress={progress}
          />
          <NavBar mode={mode} toggleMode={toggleMode}/>
          <Routes>
            <Route exact path='/news' element={<News setProgress={setProgress} apiKey={apiKey}  key='general' pageSize={pageSize} country='in' category='general' mode={mode}/>}></Route>
            <Route exact path='/business' element={<News setProgress={setProgress} apiKey={apiKey}  key='business' pageSize={pageSize} country='in' category='business' mode={mode}/>}></Route>
            <Route exact path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey}  key='entertainment' pageSize={pageSize} country='in' category='entertainment' mode={mode}/>}></Route>
            <Route exact path='/health'element={<News setProgress={setProgress} apiKey={apiKey}  key='health' pageSize={pageSize} country='in' category='health' mode={mode}/>}></Route>
            <Route exact path='/science'element={<News setProgress={setProgress} apiKey={apiKey}  key='sciemce' pageSize={pageSize} country='in' category='science' mode={mode}/>}></Route>
            <Route exact path='/sports'element={<News setProgress={setProgress} apiKey={apiKey}  key='sports' pageSize={pageSize} country='in' category='sports' mode={mode}/>}></Route>
            <Route exact path='/technology'element={<News setProgress={setProgress} apiKey={apiKey}  key='technology' pageSize={pageSize} country='in' category='technology' mode={mode}/>}></Route>
          </Routes>
          <BottomOptions mode={mode}/>
        </Router>
      </div>
    )
}
export default App