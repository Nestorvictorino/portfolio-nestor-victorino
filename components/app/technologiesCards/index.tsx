import React from 'react'
import { CardsPropsI } from '../../../interfaces/pages/Cards/cards.interface'
interface tecnoPropsI{
   technologies:Array<CardsPropsI>
}

const Cards = ({technologies}:tecnoPropsI) => {
    return (
        <div className='d-flex flex-row row'>
            {technologies.map((el) => (
                <div className='d-flex flex-column align-items-center gap-2 shakes col-md-3 col-6 mb-4'>
                    <div style={{ width: '7rem' }}>
                        <img src={`/img/${el.img}`} alt="" style={{width:'100%'}}/>
                    </div>
                    <span className='fw-bold'>{el.title}</span>
                </div>
            ))}
        </div>
    )
}

export default Cards