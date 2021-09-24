import React from 'react'
import { Card } from 'semantic-ui-react'
import CardComponent from './CardComponent'

function ResultContainer(props) {

    const result = props.passValue

    return (
        <div>
            <p>Result Length : {result.length}</p>
            <Card.Group centered stackable>
            { result.map((image) => (
                <div>
                    <CardComponent image={image}/>
                </div>
            )) } 
            </Card.Group>
        </div>
    )
}

export default ResultContainer


