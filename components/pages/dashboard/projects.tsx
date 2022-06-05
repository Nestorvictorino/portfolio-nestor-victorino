import React from 'react'

const Projects = () => {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center' style={{ background: 'url(/img/projects-bg.jpg)', width: '100%' }}>
            <span className='h2 text-white my-3 fw-normal'>Projects</span>
            <div className='d-flex flex-row justify-content-center'>
                <div className='col-md-3 col-6 w-100 d-flex flex-column justify-content-center align-items-center rounded' style={{ background: '#fff' }}>
                    <div style={{ width: '18rem' }}>
                        <img src="/img/cafeMolino.png" alt="" style={{ width: "100%" }} className='rounded' />
                    </div>
                    <span className='mt-2 linkVisit cursor-pointer' style={{borderRadius:'100px', padding:'5px 0px', width:'30%', textAlign:'center',border:'2px solid #DDB146'}}><a href="#" className='linkVisit'>Visit</a></span>
                    <span className='mt-2 linkVisit cursor-pointer' style={{borderRadius:'100px', padding:'5px 0px', width:'30%', textAlign:'center',border:'2px solid #DDB146'}}><a href="#" className='linkVisit'>Code</a></span>
                </div>
            </div>
        </div>
    )
}

export default Projects