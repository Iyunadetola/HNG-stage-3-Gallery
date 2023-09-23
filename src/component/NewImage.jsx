import React, { useState } from 'react';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove, rectSortingStrategy } from '@dnd-kit/sortable';
import Card from './Card';

const NewImage = ({ fullImg, setFullImg }) => {

    const onDragEnd = event => {
        const { active, over } = event
        if (active.id === over.id) {
            return;
        }
        setFullImg(items => {
            const oldIndex = items.findIndex((item) => item.id === active.id);
            const newIndex = items.findIndex((item) => item.id === over.id);
            return arrayMove(items, oldIndex, newIndex)

        })
    }
    return (
        <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd} >
            <SortableContext items={fullImg} strategy={rectSortingStrategy}>

                <div className='gridContainer'>
                    {fullImg.map((item, index) => (
                        <Card key={index} item={item} />
                    ))}
                </div>
            </SortableContext>
        </DndContext>
    )
}

export default NewImage