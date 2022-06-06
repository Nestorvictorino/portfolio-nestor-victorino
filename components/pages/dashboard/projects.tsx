import React from 'react'

interface projectsI {
    img: string
    link1: string
    link2: string
}

const Projects = () => {
    const projects: Array<projectsI> = [
        {
            img: "cafeMolino.png",
            link1: 'https://nestorvictorino.github.io/cafeFake/',
            link2: 'https://github.com/Nestorvictorino/cafeFake'
        },
        {
            img: "toDoList.png",
            link1: 'https://nestorvictorino.github.io/toDoList/',
            link2: 'https://github.com/Nestorvictorino/toDoList'
        },
        {
            img: "slider.png",
            link1: 'https://nestorvictorino.github.io/Slider/',
            link2: 'https://github.com/Nestorvictorino/Slider'
        },

    ]
    return (
        <div className='d-flex flex-column justify-content-center align-items-center' style={{ background: 'url(/img/projects-bg.jpg)', width: '100%', backgroundRepeat:'none', backgroundSize:'cover'}}>
            <span className='h2 text-white my-3 fw-normal'>Projects</span>
            <div className='d-flex flex-md-row flex-column row justify-content-md-evenly align-items-center mb-5' style={{width:'100%'}}>
                {projects.map((el, i) => (
                    <div className='col-md-3 col-9 d-flex flex-column justify-content-center align-items-center rounded px-0 mb-md-0 mb-4' style={{ background: '#fff'}} key={`projects${i}`}>
                        <div style={{ width: '100%' }}>
                            <img src={`/img/${el.img}`} alt="" style={{ width: "100%" }} className='rounded' />
                        </div>
                        <span className='mt-2 linkVisit cursor-pointer' style={{ borderRadius: '100px', padding: '5px 0px', width: '30%', textAlign: 'center', border: '2px solid #DDB146' }}><a href={`${el.link1}`} className='linkVisit' target={'_blank'} rel="noopener noreferrer">Visit</a></span>
                        <span className='mt-2 linkVisit cursor-pointer mb-2' style={{ borderRadius: '100px', padding: '5px 0px', width: '30%', textAlign: 'center', border: '2px solid #DDB146' }}><a href={`${el.link2}`} className='linkVisit' target={'_blank'} rel="noopener noreferrer">Code</a></span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects