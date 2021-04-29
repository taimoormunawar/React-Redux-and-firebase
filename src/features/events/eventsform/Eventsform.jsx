import React from 'react';
import {Form, Segment, Button} from 'semantic-ui-react';


export default function EventsForm({setFormOpen}){
    return(
        <Segment clearing>
            <Form>
                
            <Form.Field>
                <input type="text" name = "" id = "" placeholder="Event Title"/>
            </Form.Field>
            
            <Form.Field>
                <input type="text" name = "" id = "" placeholder="Category"/>
            </Form.Field>
            
            <Form.Field>
                <input type="text" name = "" id = "" placeholder="Description"/>
            </Form.Field>
            
            <Form.Field>
                <input type="text" name = "" id = "" placeholder="City"/>
            </Form.Field>
            
            <Form.Field>
                <input type="text" name = "" id = "" placeholder="Venue"/>
            </Form.Field>
            
            <Form.Field>
                <input type="date" name = "" id = "" placeholder="Date"/>
            </Form.Field>
            <Button type='submit' floated= 'right' positive content= 'Submit'/>
            <Button onClick={() => setFormOpen(false)} type='submit' floated= 'right' content= 'Cancel'/>
            </Form>
        </Segment>
    )
}
