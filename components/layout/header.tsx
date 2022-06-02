import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { HeaderLayoutPropsI } from '../../interfaces/layout.interface'
import { navSettings } from '../../settings/nav.settings'

const Header = ({ title }: HeaderLayoutPropsI) => {
    const router = useRouter()
    const active = router.pathname.split("/").pop()
    const handlerClass = (tabName: string) => tabName === active ? "ActiveTab" : "";
    return (
        <React.Fragment>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <title>{title}</title>
            </Head>
            <div className="row">
                <div className="logo col-xs-12 col-md-12 col-lg-6">
                    <a href="#"><img src="/img/LogoSinFondoPNG.png" alt="" /></a>
                </div>
                <ul className='d-flex flex-row mb-0 container ms-4 showMenu'>
                    {
                        navSettings.map((item, i) => {
                            return (
                                <li className={`d-block mx-4 fw-bold`} key={i}>
                                    <Link href={item.path}>
                                        <a href="" className={`${handlerClass(item.path.slice(1))} p-2 px-3 rounded `.trim()}>
                                            {item.name}
                                        </a>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

            {/* <div className="row textos">
                <div className="col-md-12">
                    <h2 className="primera_linea">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
                    <h3 className="segunda_linea">Lorem ipsum dolor sit amet consectetur.</h3>
                    <div className="contenedor-btns">
                        <a href="">Caracteristicas</a>
                        <a href="">Comprar ahora!</a>
                    </div>
                </div>
            </div> */}
        </React.Fragment>
    )
}

export default Header