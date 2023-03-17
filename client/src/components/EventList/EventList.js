import Event from '../Event/Event';
import {v4 as uuid} from 'uuid';

export default function EventList({matchingEvents, searchQuery}){

    if (matchingEvents.length > 0) {
        return(
            <div key={uuid()}>
                <div>hai events.  You searched for: {searchQuery}</div>

                {matchingEvents.map(event => {
                    return (
                        <Event eventDetails={event} />
                        )
                    })
                }
            </div>
        );
    } else if (searchQuery !== "") {
        return <div>nothign found</div>
    } else {
        return;
    }
}