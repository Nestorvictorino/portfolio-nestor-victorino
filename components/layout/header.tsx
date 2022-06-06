import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { HeaderLayoutPropsI } from '../../interfaces/layout.interface'
import { navSettings } from '../../settings/nav.settings'

const Header = ({ title }: HeaderLayoutPropsI) => {
    const router = useRouter()
    const active = router.pathname.split("/").pop()
    const handlerClass = (tabName: string) => tabName === active ? "activeTab" : "";
    return (
        <React.Fragment>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <title>{title}</title>
            </Head>
            <div className="d-flex flex-md-row flex-column align-items-center justify-content-between px-5 pt-3 pb-3 container" style={{borderBottom:'1px solid rgba(255, 255, 255, 0.4)'}}>
                <div className='mb-md-0 mb-4 me-md-0 me-4' style={{ width: '8rem' }}>
                    <img src="/img/LogoSinFondoPNG.png" alt="" style={{width:'100%'}}/>
                </div>
                <ul className='d-flex flex-row mb-0 ms-md-4 ms-0 text-white ps-0'>
                    {
                        navSettings.map((item, i) => {
                            return (
                                <li className={`d-block mx-3 fw-normal`} key={i}>
                                    <Link href={item.path}>
                                        <a href="" className={`${handlerClass(item.path.slice(1))} p-2 px-2 rounded navs`.trim()}>
                                            {item.name}
                                        </a>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </React.Fragment>
    )
}

export default Header