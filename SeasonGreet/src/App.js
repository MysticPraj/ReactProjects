import './App.css';
import React from 'react'
import avatarImage from './assets/avatar.png'
import { Card,Image,Button, Grid } from 'semantic-ui-react';


const userContext = React.createContext('person');


const person = [{
  firstName : "Chris",
  lastName : "Smitham",
  jobTitle : "District Assurance Director",
  comments :"synthesize optical transmitter",
},
{
  firstName : "Easter",
  lastName : "Nikolaus",
  jobTitle : "Customer Intranet Associate",
  comments :"index 1080p application",
},
{
  firstName : "Rico",
lastName : "Quitzon",
jobTitle : "Global Paradigm Associate",
comments :"generate bluetooth firewall",
},
{
  firstName : "Maximillia",
lastName : "Kihn",
jobTitle : "Dynamic Group Representative",
comments :"bypass mobile panel",
},
{
  firstName : "Katharina",
lastName : "Murazik",
jobTitle : "Product Directives Specialist",
comments :"parse mobile driver",
},
]

const PersonList = person.map((persons) =>
<Card.Group>
<Card>
  <Card.Content>
    <Image
      floated='left'
      size='mini'
      src={avatarImage}
    />
    <Card.Header>{persons.firstName} {persons.lastName}</Card.Header>
    <Card.Meta> {persons.jobTitle} </Card.Meta>
    <Card.Description>
    {persons.firstName} wants to add you to the group <strong>best friends</strong>
    </Card.Description>
  </Card.Content>
  <Card.Content extra>
    <div className='ui two buttons'>
      <Button basic color='green'>
        Approve
      </Button>
      <Button basic color='red'>
        Decline
      </Button>
    </div>
  </Card.Content>
</Card>
</Card.Group>
);

function App() {
  return (
    <div className="App">
      <Grid>
      {PersonList}
      </Grid>
    </div>
  );
}

export default App;
