import React from 'react';
import EventsListItem from './EventsListItem';

export default function EventsList(props) {
    return (
        <div>
            {props.events.map(event => (
            <EventsListItem event={event} key={event.id}/>
            ))}
            
        </div>
    )
} 