import React from 'react';
import logo from './logo.svg';
import './App.css';

const list = [
  {
    name: "naruto",
    color: "orange",
    id: "n",
  },
  {
    name: "sasuke",
    color: "blue",
    id: "s",
  },
  {
    name: "sakura",
    color: "pink",
    id: "k",
  }
]

function App() {

  const title = "React";

  return (
    <div className="App">
    {list.map(function(item)
      {return <div key={item.id}>
        {item.name}
        <span>{item.id}</span>
      </div>;}
    )}



      <label htmlFor="search">Search:</label>
      <input id="search" type="text" />\
    </div>
  );
}

export default App;
