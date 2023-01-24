import React from 'react';
import '../App.css';
import Home from './Home';
import About from './About';
import Topics from './Topics';
import Topic from './Topic'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ul>
          <li align="left"><Link to='/'>Home</Link></li>
          <li align="left"><Link to='/about'>About</Link></li>
          <li align="left"><Link to='/topics'>Topics</Link></li>
        </ul>

        <hr />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/topics" element={<Topics />}>
            <Route path=":topicId" element={<Topic />}></Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
