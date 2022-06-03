import React from 'react'
import Cards from '../../app/technologiesCards'

const AboutMe = () => {
    const technologies = [
        {
            title: 'HTML',
            img:'html.png'
        },
        {
            title:'CSS',
            img:'CSS-Logo.png'
        },
        {
            title: 'Javascript',
            img:'JavaScript-logo.png'
        },
        {
            title:'Typescript',
            img:'typescript.png'
        }
    ]
    return (
        <div className='d-flex flex-column justify-content-center align-items-center container'>
            <span className='h2 fw-light mb-3'>About me</span>
            <span className='mb-3'>Hi, my name is Néstor Victorino and I'm from the Dominican Republic. I've really liked web development for a long time and it's what I'm passionate about today. I specialize in Front End but I also do whatever is needed in the Backend. I also really like music and barbecues😂🎶🍖 </span>
            <span className='h2 fw-light my-3 d-inline-block'>Technologies that I like to use</span>

            <Cards technologies={technologies}/>
        </div>
    )
}

export default AboutMe