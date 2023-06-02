import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed  from './Feed';

function App() {
  return (
    <div className="app">
      {/* header */}
      <Header/>


      {/* App Body */}
      <div className='app_body'>

        {/* sidebar */}
        <Sidebar/>


        {/* main feed */}
        <Feed/>
        {/* widgets */}
      </div>



      
      
     
    </div>
  );
}

export default App;
