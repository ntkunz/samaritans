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

  //======ATTN TEAM, CLICK ON LOG STATES BUTTON TO console.log NEW STATES=====
  
    // let locations = []; 
    let categoriesArray = [];
  
  //on load get events
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
        // console.log("categories", categories)
        // console.log("events: ", events)
      })
      .catch((err) => {
          console.log(err);
      })
  }


  function getCategories(array) {
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

function logStates() {
    console.log('events', events);
    console.log('categories: ', categories)
  }

    //=====THIS WILL BE GET LOCATION FUNCTION SOON=====
  // function getCategories(array) {
  //   let categoriesArray = [];
  //   array.forEach(event => {
  //     event.category.forEach(cat => {
  //     if (!categoriesArray.includes(cat)){
  //       categoriesArray.push(cat);
  //     }})
  //     return categoriesArray;
  //   })
  // }


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
