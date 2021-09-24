import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Button } from 'semantic-ui-react'
import Example from './Examples'

function DragNDrop() {
    return (
        <div>
            <DndProvider backend={HTML5Backend}>
                <Example />
            </DndProvider>
        </div>
    )
}

export default DragNDrop



