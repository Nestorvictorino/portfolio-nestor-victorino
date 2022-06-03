import React from 'react'
interface tecnoPropsI{
    title: string
    img: string
}
const Cards = ({technologies}:any) => {
    return (
        <div className='d-flex flex-row gap-3'>
            {technologies.map((el) => (
                <div className='d-flex flex-column align-items-center gap-2 shakes'>
                    <div style={{ width: '7rem' }}>
                        <img src={`/img/${el.img}`} alt="" style={{ width: '100%' }} />
                    </div>
                    <span className='fw-bold'>{el.title}</span>
                </div>
            ))}
        </div>
    )
}

export default Cards