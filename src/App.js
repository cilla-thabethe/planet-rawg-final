import NavigationBar from "./components/NavigationBar";
import Dashboard from "./components/Dashboard";
import DataComparison from "./components/DataComparison";
import Timeline from "./components/Timeline";
import {Routes, Route} from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <div className="App">
      <NavigationBar/>

      <Routes>
        <Route path='/' element={ <Dashboard/> } />; 
        <Route path='/datacompare' element={ <DataComparison/> } />;
        <Route path='/timeline' element={ <Timeline/> } />
      </Routes>

    </div>
  );
}

export default App;
