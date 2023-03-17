import "./Event.scss";

export default function Event({ eventDetails }) {
  const serverUrl = "http://localhost:8080";
  function displayList(arr) {
    if (arr.length === 1) {
      return arr[0];
    } else if (arr.length > 1) {
      let theList = "";
      arr.forEach((item, index, array) => {
        console.log("theitem: ", item);
        if (index === array.length - 1) {
          theList += item;
        } else {
          theList += item + ", ";
        }
      });
      console.log("the list: ", theList);
      return theList;
    }
  }
  return (
    <div className="card">
      <div className="card__box">
        <h2 className="card__title">{eventDetails.title}</h2>
        <img
          className="card__image"
          src={`${serverUrl}/${eventDetails.image}`}
        />
        <p className="card__description">{eventDetails.description}</p>
      </div>
      <p className="card__category">
        <span className="card__bold">Category:</span>{" "}
        {displayList(eventDetails.category)}
      </p>
      <p className="card__location">
        <span className="card__bold">Location:</span> {eventDetails.location}
      </p>
      <p className="card__start">
        <span className="card__bold">Start Date:</span> {eventDetails.start}
      </p>
      <p className="card__organization">
        <span className="card__bold">Organization:</span>{" "}
        {eventDetails.organization}
      </p>
    </div>
  );
}
