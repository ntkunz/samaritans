import {v4 as uuid} from 'uuid';
import {useState} from 'react';

export default function Form({events, categories, locations, displayEvents}) {

    function submitHandler(event){
      event.preventDefault();

      // Get an array of the checked categories
      let checkedCategories = [];
      if (checkedCategories.length > 0) console.log("checkedCat not empty");
      checkedCategories = categories.filter(cat => event.target[cat.toLowerCase()].checked)
      console.log("checked categories: ", checkedCategories);

      // Get an array of checked locations
      let checkedLocations = [];
      checkedLocations = locations.filter(loc => event.target[loc.toLowerCase()].checked)
      console.log("checked lcoations: ",checkedLocations);


      // First get a list of all events that match the chosen categories
      let matchingCatEvents = []
      matchingCatEvents = events.filter(event => {
        for (let i=0;i<event.category.length; i++){
          if (checkedCategories.includes(event.category[i].toUpperCase())){
            return true;
          }
        }
        return false;
      })

      // Now further filter the category matched events list by location. This is your final list of matching events checked against category & location
      let matchingEvents = [];
      matchingEvents = matchingCatEvents.filter(event => {
        return (checkedLocations.includes(event.location.toUpperCase()));
      })
      console.log("matchign category events: ", matchingCatEvents);
      console.log("matchign events: ", matchingEvents);

      let searchQuery = `Categories: ${checkedCategories} | Locations: ${checkedLocations}`;

      // Finally, send back matching events to parent fxn, which will set matchingEvents state and trigger re-render that displays matching events on page
      displayEvents(matchingEvents, searchQuery);

    }
  
    /* 
    * Form component uses cat and loc arrays to map out inputs
    */

    return (
        <div className="App">
          <form className="eventform" onSubmit={submitHandler}>
            <h2>Categories:</h2>
            {categories.map(elem => { let elemLower = elem.toLowerCase(); return (
              <div key={uuid()}>
              {/* <label  htmlFor={elem}>{elem.replace("_"," ")}</label> */}
              <label  htmlFor={elemLower}>{elem}</label>
              <input key={uuid()} className="eventform__input" type="checkbox" name={elemLower} value={elemLower} id={elemLower}></input>
              </div>
            )})}
            <h2>Locations:</h2>
            {locations.map(elem => { let elemLower = elem.toLowerCase(); return (
              <div key={uuid()}>
              {/* <label  htmlFor={elem}>{elem.replace("_"," ")}</label> */}
              <label  htmlFor={elemLower}>{elem}</label>
              <input key={uuid()} className="eventform__input" type="checkbox" name={elemLower} value={elemLower} id={elemLower}></input>
              </div>
            )})}
            <button >Submit</button>
          </form>
    
        </div>
    );
}