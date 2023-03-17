import Event from '../Event/Event';
import {v4 as uuid} from 'uuid';
import "./EventList.scss";

export default function EventList({matchingEvents, searchQuery}){

    if (matchingEvents.length > 0) {
        return(
            <div className="event__outer-wrapper" key={uuid()}>
                <div className='event__ribbon'>
                    <p className='event__text event__text--small'>You searched for: <span className='event__text'>{searchQuery} </span> </p>
                    <p className='event__text event__text--special' >{matchingEvents.length} Results</p>
                </div>              
                <div className="event__wrapper">
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