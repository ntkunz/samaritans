import { v4 as uuid } from "uuid";
import "./Form.scss";

export default function Form({ events, categories, locations, displayEvents }) {
  function submitHandler(event) {
    event.preventDefault();

    // Get an array of the checked categories
    let checkedCategories = [];
    if (checkedCategories.length > 0) console.log("checkedCat not empty");
    checkedCategories = categories.filter(
      (cat) => event.target[cat.toLowerCase()].checked
    );
    console.log("checked categories: ", checkedCategories);

    // Get an array of checked locations
    let checkedLocations = [];
    checkedLocations = locations.filter(
      (loc) => event.target[loc.toLowerCase()].checked
    );
    console.log("checked lcoations: ", checkedLocations);

    // If user selected neither cats nor locs, then stop them and cancel out.
    if (checkedCategories.length === 0 && checkedLocations.length === 0) {
      alert("Must choose at least 1 category or 1 location!");
      return;
    }

    // First get a list of all events that match the chosen categories
    let matchingCatEvents = [];
    if (checkedCategories.length > 0) {
      matchingCatEvents = events.filter((event) => {
        for (let i = 0; i < event.category.length; i++) {
          if (checkedCategories.includes(event.category[i].toUpperCase())) {
            return true;
          }
        }
        return false;
      });
    }

    // Now further filter the category matched events list by location. This is your final list of matching events checked against category & location
    let matchingEvents = [];
    if (checkedLocations.length === 0 && matchingCatEvents.length > 0) {
      // If there were no locations selected, then just return events matching category. Earlier checks make it impossible to get here with neither locs nor cats
      matchingEvents = matchingCatEvents;
    } else if (checkedLocations.length > 0 && matchingCatEvents.length == 0) {
      // If locations were selected, but no categories
      matchingEvents = events.filter((event) => {
        return checkedLocations.includes(event.location.toUpperCase());
      });
    } else {
      // If both cats and locs were selected
      matchingEvents = matchingCatEvents.filter((event) => {
        return checkedLocations.includes(event.location.toUpperCase());
      });
    }
    // console.log("matchign category events: ", matchingCatEvents);
    // console.log("matchign events: ", matchingEvents);

    // This will be used to display what was selected for this search
    let searchQuery = `Categories: ${checkedCategories} | Locations: ${checkedLocations}`;

    // Finally, send back matching events to parent fxn, which will set matchingEvents state and trigger re-render that displays matching events on page
    displayEvents(matchingEvents, searchQuery);
  }

  return (
    <div className="App">
      <form className="eventform" onSubmit={submitHandler}>
        <h2>Categories:</h2>
        <div className="eventform__checkgroup">
          {categories.map((elem) => {
            let elemLower = elem.toLowerCase();
            return (
              <div key={uuid()} className="eventform__checkbox">
                <input
                  key={uuid()}
                  className="eventform__input"
                  type="checkbox"
                  name={elemLower}
                  value={elemLower}
                  id={elemLower}
                ></input>
                <label htmlFor={elemLower}>{elem}</label>
              </div>
            );
          })}
        </div>
        <h2>Locations:</h2>
        <div className="eventform__checkgroup">
          {locations.map((elem) => {
            let elemLower = elem.toLowerCase();
            return (
              <div key={uuid()} className="eventform__checkbox">
                <input
                  key={uuid()}
                  className="eventform__input"
                  type="checkbox"
                  name={elemLower}
                  value={elemLower}
                  id={elemLower}
                ></input>
                <label htmlFor={elemLower}>{elem}</label>
              </div>
            );
          })}
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
