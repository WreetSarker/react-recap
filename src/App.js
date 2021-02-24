import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // const libraries = [
  //   { name: 'React', num: 1 },
  //   { name: 'Vue.js', num: 2 },
  //   { name: 'Angular', num: 3 },
  //   { name: 'React Native', num: 4 },
  // ]
  const [libraries, setLibrary] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(data => setLibrary(data));
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MovieCounter></MovieCounter>
        {/* <Libraries name="React" num="1"></Libraries>
        <Libraries name="Vue.js" num="2"></Libraries>
        <Libraries name="Angular" num="3"></Libraries> */}
        {
          libraries.map(library => <Libraries name={library.name} num={library.num}></Libraries>)
        }
      </header>
    </div>
  );
}

function MovieCounter() {
  const style = {
    backgroundImage: 'linear-gradient(45deg, cyan, blue)',
    width: '300px',
    height: '300px',
    padding: '15px',
    borderRadius: '15px',
    border: '3px solid gray'
  }
  const [count, setCount] = useState(0);
  return (
    <div style={style}>
      <h1>Number of movies: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Add Movies</button>
      <button onClick={() => setCount(count - 1)}>Remove Movies</button>
    </div>
  );
}


function Libraries(props) {
  const style = {
    backgroundImage: 'linear-gradient(45deg, cyan, blue)',
    width: '300px',
    height: '300px',
    padding: '15px',
    borderRadius: '15px',
    border: '3px solid gray'
  }
  return (
    <div style={style}>
      <h1>{props.name}</h1>
      <p>The No. {props.num} library for react</p>
    </div>
  );
}
export default App;
