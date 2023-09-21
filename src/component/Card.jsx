import React from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

const Card = ({item}) => {

    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: item.id })

    const style = {
        transition,
        transform: CSS.Transform.toString(transform)
    }
    return (
        <div >
            <div className='gridItem' ref={setNodeRef} {...attributes} {...listeners} style={style} >
                <img src={item.src.portrait} alt='' className='gridImage' />
                <h4 className='gridH1' >{item.alt}</h4>
            </div>
        </div>
    )
}

export default Card