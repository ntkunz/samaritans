import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

//=========TO GET THE SERVER TO WORK WITH AXIOS, YOU MAY NEED TO ADD 
//=========APP.USE(CORS()); TO YOUR MIDDLEWARE, AND NPM INSTALL CORS?
function App() {

const api="http://localhost:8080";

  const [ events, setEvents ] = useState(["hello", "goodbye"]);
  const [ categories, setCategories ] = useState(["cat", "dog"]);
  const [ locations, setLocations ] = useState(["hamburger", "hotdog"]);

  //======ATTN TEAM, CLICK ON LOG STATES BUTTON TO console.log NEW STATES=====
  
  //on load, get events
  useEffect(() => {
      getEvents();
  }, []);


  //function to get events array from api then set events
  function getEvents() {
      axios.get(`${api}/events`)
      .then((res) => {
          setEvents(res.data)
          return res.data
      })
      .then((eventsArray) => {
        const byCategory = getCategories(eventsArray)
        setCategories(byCategory)
        console.log('byCategory', byCategory)
        return(eventsArray)
      })
      .then((eventsArray) => {
        console.log(eventsArray)
        const byLocation = getLocations(eventsArray)
        setLocations(byLocation)
      })
      .catch((err) => {
          console.log(err);
      })
  }

//=====GET CATEGORIES FUNCTION=====
  function getCategories(array) {
    let categoriesArray = [];
    array.forEach(event => {
      event.category.forEach(cat => {
        // changed categories to uppercase to deal with mismatched cases
        if (!categoriesArray.includes(cat.toUpperCase())) {
          categoriesArray.push(cat.toUpperCase())
          console.log('cat array: ', categoriesArray)
        }
      })
    })
    return categoriesArray;
  }

  //=====GET LOCATIONS FUNCTION=====
  function getLocations(array) {
    let locationsArray = [];
      array.forEach(event => {
        // changed locations to uppercase to deal with mismatched cases
        if (!locationsArray.includes(event.location.toUpperCase())) {
          locationsArray.push(event.location.toUpperCase())
          console.log('location array : ', locationsArray)
        }
      })
    return locationsArray;
  }

function logStates() {
    console.log('events', events);
    console.log('categories: ', categories)
    console.log('locations: ', locations)
  }

  return (
    <div className="App">
      <header className="App-header">
          <p>{events.length}</p>
          <p>{events.length}</p>
          <p>{categories.length}</p>
          <button onClick={logStates}>log states</button>
      </header>
    </div>
  );
}

export default App;
