import React, { useState } from 'react'
import { Button, Card, Icon, Image, Label } from 'semantic-ui-react'


function CardComponent(props) {

    const image = props.image 
    const [visibility,setVisibility] = useState(true)

    return (
        <div>
            {visibility?(<Card raised={true}>
                <Card.Content>
                  <Card.Header>
                    <Button color="blue" 
                            labelPosition={'left'} 
                            circular 
                            inverted 
                            label={<Label>{image.alt_description}</Label>} 
                            icon='close' onClick={()=>setVisibility(!visibility)}/></Card.Header>
                  <Card.Header href={image.urls.small}><Image fluid src={image.urls.small} wrapped ui={true}/></Card.Header>
                  <Card.Meta>
                    <span className='date'>created at {image.created_at.slice(0, 10)}</span>
                  </Card.Meta>
                  <Card.Description>
                  
                      {image.description||image.alt_description}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <Icon name='thumbs up outline'/>{(image.likes&&(`${image.likes} likes`))}
                </Card.Content>
                <Card.Content extra>
                <div className='ui two buttons'>
                <Button color='green' labelPosition='left'>
                <Label basic color='green'>
                <Icon color='green' name='check'/>
                Approve</Label> 
                </Button>
                <Button color='red' labelPosition='left'>
                <Label basic color='red'>
                <Icon color='red' name='times'/>
                Decline</Label> 
                </Button>
                </div>
                </Card.Content>
              </Card>):''}
                
        </div>
    )
}

export default CardComponent