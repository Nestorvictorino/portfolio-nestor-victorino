import React from 'react'
import { LayoutPropsI } from '../../interfaces/layout.interface'
import Header from './header'

const Layout = ({ title, children }: LayoutPropsI) => {
    const actualY = new Date().getFullYear()
    return (
        <div className="d-flex flex-column flex-root" style={{background:'url(/img/bg.jpg)', height:'30rem',width: '100vw', backgroundSize:'cover'}}>
            <Header title={title} />
            <div className="d-flex justify-content-center flex-column">
                {children}
            </div>
            <footer className='d-flex justify-content-center py-3' style={{background:'#2D353E'}}>
                <span className='text-white'>Hey Ness!! - {actualY}</span>
            </footer>
        </div>
    )
}

export default Layout