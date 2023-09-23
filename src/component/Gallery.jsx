// import React, { useState } from 'react'
// import img1 from '../assets/images/EnnyLennyVase.png'
// import img2 from '../assets/images/purepng1.png'
// import img3 from '../assets/images/red-rose-flower-2079991.png'
// import img4 from '../assets/images/white-brown-and-purple-petaled-flowers-9311621 copy.png'
// import img5 from '../assets/images/white-red-orange-and-brown-flowers-9311681 copy.png'
// import img6 from '../assets/images/photo2.jpg'
// import img7 from '../assets/images/photo3.jpg'
// import img8 from '../assets/images/photo4.jpg'
// // import Input from './Input'
// import { closestCenter, DndContext } from '@dnd-kit/core'
// import { arrayMove, SortableContext, useSortable, rectSwappingStrategy } from '@dnd-kit/sortable'
// import { CSS } from '@dnd-kit/utilities'




// const SortableData = ({ item }) => {
//     const [img, setImg] = useState('')
//     const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: item.id })
//     const style = {
//         transition,
//         transform: CSS.Transform.toString(transform),
//     }
//     return (
//         <div className='picture' ref={setNodeRef} style={style} {...attributes} {...listeners} >
//             <img src={item.imgSrc} style={{ width: '100%' }} />
//         </div>
//     )
// }




// const Gallery = () => {
//     const data = [
//         {
//             id: 1,
//             imgSrc: img1
//         },
//         {
//             id: 2,
//             imgSrc: img2
//         },
//         {
//             id: 3,
//             imgSrc: img3
//         },
//         {
//             id: 4,
//             imgSrc: img4
//         },
//         {
//             id: 5,
//             imgSrc: img5
//         },
//         {
//             id: 6,
//             imgSrc: img6
//         },
//         {
//             id: 7,
//             imgSrc: img7
//         },
//         {
//             id: 8,
//             imgSrc: img8
//         },

//     ]
//     const onDragEnd = event => {
//         const { active, over } = event
//         if (active.id == over.id) {
//             return;
//         }
//         setImg(imgSrc => {
//             const oldIndex = imgSrc.findIndex((item) => item.id === active.id);
//             const newIndex = imgSrc.findIndex((item) => item.id === over.id);
//             return arrayMove(imgSrc, oldIndex, newIndex)


//         })
//     }



//     return (
//         <div className='modalDiv' >

//             <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
//                 <SortableContext items={data} strategy={rectSwappingStrategy}>
//                     <div className='gallery'>
//                         {data.map((item, index) => {
//                             return (
//                                 <SortableData key={item.id} item={item} />
//                             )
//                         })
//                         }

//                     </div>
//                 </SortableContext>
//             </DndContext>
//         </div>
//     )
// }

// export default Gallery
