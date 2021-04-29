import React, {useState} from 'react'
import {Container} from 'semantic-ui-react';
import EventsDashboard from '../../features/events/eventsDashboard/EventsDashboard';
import NavBar from '../../features/nav/NavBar';
function App() {
  const [formOpen,setFormOpen] = useState(false);
  return (
    <div>
     <h1>Re-events</h1>
     <NavBar setFormOpen={setFormOpen}/>

     <Container className='main'>
     <EventsDashboard formOpen={formOpen} setFormOpen={setFormOpen}/>
     </Container>
     
    </div>
  );
}

export default App;
