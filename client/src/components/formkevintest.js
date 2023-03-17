import {v4 as uuid} from 'uuid';

export default function FormKevin() {

    let arr = ["animal Can", "Ajd awW", "Wopa", "tom"];
    function submitHandler(event){
      event.preventDefault();
      
      arr = arr.map((elem) => {
        return elem.toLowerCase().replace(" ","_");
      })
      console.log(arr);
  
      // can use square brackets to target name attrib of the checkbox element
      // this will be handy if we're using variables to get the name
      console.log(event.target["animal_can"].checked);
    }
  
    /* 
    * Form component uses cat and loc arrays to map out inputs
    */

    return (
        <div className="App">
          <form className="eventform" onSubmit={submitHandler}>
            {arr.map(elem => {console.log(uuid()); return (
              <div key={uuid()}>
              <label  htmlFor={elem}>{elem.replace("_"," ")}</label>
              <input key={uuid()} className="eventform__input" type="checkbox" name={elem} value={elem} id={elem}></input>
              </div>
            )})}
            <label htmlFor="environment">Environment</label>
            
            <input className="eventform__input" type="checkbox" name="environment" value="environment" id="environment"></input>
            <label htmlFor="animal">Animal</label>
            <input className="eventform__input" type="checkbox" name="animal_can" value="animal_can" id="animal_can"></input>
            <label htmlFor="shoreline">Shoreline</label>
            <input className="eventform__input" type="checkbox" name="shoreline" value="shoreline" id="shoreline"></input>
            <button >Submit</button>
          </form>
    
        </div>
    );
}