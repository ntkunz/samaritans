import Event from '../Event/Event';
import {v4 as uuid} from 'uuid';
import "./EventList.scss";

export default function EventList({matchingEvents, searchQuery}){

    if (matchingEvents.length > 0) {
        return(
            <div key={uuid()}>
                <p>{matchingEvents.length} Results</p>
                <p>You searched for:</p>
                <p>{searchQuery}</p>
                <div class="event__wrapper">
                    {matchingEvents.map(event => {
                        return (
                            <Event eventDetails={event} />
                            )
                        })
                    }
                </div>
            </div>
        );
    } else if (searchQuery !== "") {
        return <p>Sorry! No matching events. Please change your selections and try again.</p>
    } else {
        return;
    }
}