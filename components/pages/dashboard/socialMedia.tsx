import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'


const SocialMedia = () => {

    return (
        <div className='d-flex flex-column justify-content-center align-items-center mt-3' style={{ background: '#2d353e', padding: '40px 0px', width: '100%' }}>
            <span className='text-white fs-3 mb-3 h2 fw-normal'>Social networks</span>
            <div className='d-flex flex-md-row flex-column justify-content-between gapping align-items-center'>
                <a href="https://www.linkedin.com/in/nestor-victorino-099a15174/" className='text-white'>
                    <span className='d-flex flex-column align-items-center justify-content-center' style={{ fontSize: '1rem' }}>
                        <FontAwesomeIcon icon={faLinkedinIn} style={{width:'5rem'}}/>
                        {/* <p>LinkedIn</p> */}
                    </span>
                </a>
                <a href="https://github.com/Nestorvictorino" className='text-white'>
                    <span className='d-flex flex-column align-items-center justify-content-center' style={{ fontSize: '1rem' }}>
                        <FontAwesomeIcon icon={faGithub} style={{width:'5rem'}}/>
                        {/* <p>GitHub</p> */}
                    </span>
                </a>
                <a href="https://www.instagram.com/nestorvictorino/" className='text-white'>
                    <span className='d-flex flex-column align-items-center justify-content-center' style={{ fontSize: '1rem' }}>
                        <FontAwesomeIcon icon={faInstagram} style={{width:'5rem'}}/>
                        {/* <p>Instagram</p> */}
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