import React from 'react'
import Cards from '../../app/technologiesCards'

const AboutMe = () => {
    const technologies = [
        {
            title: 'HTML',
            img:'html-5.png'
        },
        {
            title:'CSS',
            img:'css-3.png'
        },
        {
            title: 'Javascript',
            img:'js.png'
        },
        {
            title:'Typescript',
            img:'typescript.png'
        },
        {
            title:'React',
            img:'React.WEBP'
        },
        {
            title:'NextJS',
            img:'nextjs.WEBP'
        },
        {
            title:'Bootstrap',
            img:'bootstrap.png'
        },
        {
            title:'Wordpress',
            img:'wordpress.png'
        }
    ]
    return (
        <div className='d-flex flex-column justify-content-center align-items-center container'>
            <span className='h2 fw-light mb-3'>About me</span>
            <span className='mb-3 container-xxl border p-3 '>Hi, my name is Néstor Victorino and I'm from the Dominican Republic. I've really liked web development for a long time and it's what I'm passionate about today. I specialize in Front End but I also do whatever is needed in the Backend. I also really like music and barbecues😂🎶🍖 </span>
            <span className='h2 fw-normal mt-3 mb-5 d-inline-block'>Technologies that I use</span>
            <Cards technologies={technologies}/>
        </div>
    )
}

export default AboutMe