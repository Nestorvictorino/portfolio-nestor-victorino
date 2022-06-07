import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'


const SocialMedia = () => {

    return (
        <div className='d-flex flex-column justify-content-center align-items-center mt-3' style={{ background: '#2d353e', padding: '40px 0px', width: '100%' }}>
            <span className='text-white fs-3 mb-3 h2 fw-normal'>Social networks</span>
            <div className='d-flex flex-md-row justify-content-between gapping align-items-center mt-2'>
                <a href="https://www.linkedin.com/in/nestor-victorino-099a15174/" className='text-white d-inline-block'>
                    <span className='d-flex flex-column align-items-center justify-content-center' style={{width:'3rem'}}>
                        <FontAwesomeIcon icon={faLinkedinIn} />
                        <p style={{ fontSize: '1rem' }}>LinkedIn</p>
                    </span>
                </a>
                <a href="https://github.com/Nestorvictorino" className='text-white d-inline-block'>
                    <span className='d-flex flex-column align-items-center justify-content-center ' style={{width:'3rem'}}>
                        <FontAwesomeIcon icon={faGithub} />
                        <p style={{ fontSize: '1rem', marginTop:'0.4rem' }}>GitHub</p>
                    </span>
                </a>
                <a href="https://www.instagram.com/nestorvictorino/" className='text-white d-inline-block' style={{width:'3rem'}}>
                    <span className='d-flex flex-column align-items-center justify-content-center' >
                        <FontAwesomeIcon icon={faInstagram} />
                        <p style={{ fontSize: '1rem' }}>Instagram</p>
                    </span>
                </a>
                {/* <a href="https://github.com/Nestorvictorino" className='text-white' style={{ fontSize: '1.3rem' }} >
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://www.instagram.com/nestorvictorino/" className='text-white' style={{ fontSize: '1.3rem' }} >
                    <FontAwesomeIcon icon={faInstagram} />
                </a> */}
            </div>
        </div>
    )
}

export default SocialMedia