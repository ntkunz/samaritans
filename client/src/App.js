import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';


function App() {

  const [ events, setEvents ] = useState([]);
  const [ categories, setCategories ] = useState([]);
  
  // const categories = []; 
  const locations = []; 
  
  //on load get events
  useEffect(() => {
      getEvents();
  }, []);
  
  //function to get events array from api then set events
  function getEvents() {
      axios.get(`${api}/events`)
      .then((res) => {
          console.log(res.data)
          setEvents(res.data)
      })
      //did have res.data before events below but it threw errors
      .then((events) => {
        setCategories(getCategories(events))
        
      })
      .catch((err) => {
          console.log(err);
      })
  }
  
  function getCategories(array) {
    let categoriesArray = [];
    array.forEach(event => {
      event.category.forEach(cat => {
      if (!categoriesArray.includes(cat)){
        categoriesArray.push(cat);
      }})
      return categoriesArray;
    })
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
