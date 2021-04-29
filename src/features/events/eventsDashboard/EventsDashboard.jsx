import React, {useState} from 'react'
import { Grid } from 'semantic-ui-react';
import EventList from './EventsList';
import EventsForm from '../eventsform/Eventsform';
import {SampleData} from '../../../app/api/SampleData';


const EventsDashboard = ({formOpen, setFormOpen}) => {
    const [events,setEvents] = useState(SampleData);
    
    return(
<Grid>
            <Grid.Column width={10}>
                <EventList events={events}/>
            </Grid.Column>
            <Grid.Column width={6}>
                {formOpen &&
                <EventsForm setFormOpen={setFormOpen}/>
            }
            </Grid.Column>
</Grid>  
    )
}

export default EventsDashboard;