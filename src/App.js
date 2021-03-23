import React from 'react';
import './App.css';
import Registration from './component/Registration';
import Players from './component/Players';

// const initialList=[{id:1,name:"Habs"}, {id:2, name:"Raptors"}];
// const initialList=[{name:"Habs"}, {name:"Raptors"}]

function App() {
 
  
  return (
    <div className="app">
      <Registration />
      <Players />
    </div>
  );
}

export default App;
