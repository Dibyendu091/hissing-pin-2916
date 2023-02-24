import React, { useEffect, useState } from 'react';
import { founded_brands } from '../API/api'

import styles from './Navbar.module.css'
import { Link } from 'react-router-dom';
import Logo from '../Image/logo.png'
import { FaShoppingBag } from 'react-icons/fa'



const Navbar = () => {

    const AllLinks = [
        { path: '/', title: 'HOME' },
        { path: '/women', title: 'WOMEN' },
        { path: '/shoes', title: 'SHOES' },
        { path: '/handbags', title: 'HANDBAGS' },
        { path: '/jwellery', title: 'JWELLERY & ACCESSORIES' },
        { path: '/men', title: 'MEN' },
        { path: '/kids', title: 'KIDS' },
        { path: '/sale', title: 'SALE' },
        { path: '/designers', title: 'DESIGNERS' },
        { path: '/editorial', title: 'EDITORIAL' },
        { path: '/gifts', title: 'GIFTS' },
    ];

    const [data, setData] = useState([])

    useEffect(() => {
        founded_brands()
            .then((res) => {
                console.log(res.data)
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])





    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.sidebar_top}>
                    {/* 1st */}
                    <Link>
                        <div className={styles.top_child} >
                            <p style={{ fontSize: '12px', margin: '5px 3px' }}>Stores & Events</p>
                        </div>
                    </Link>
                    {/* 2nd */}
                    <Link>
                        <div className={styles.top_child} style={{ marginLeft: '-10px' }}>
                            <p style={{ fontSize: '12px', margin: '5px 9px' }}>Stores & Events</p>
                        </div>
                    </Link>
                    {/* 3rd */}
                    <Link>
                        <div className={styles.top_child_3} style={{ width: '150%', display: 'flex', marginLeft: '-10px', }}>
                            <span>
                                <img style={{ width: '90%', margin: '-2px 0px' }} src="https://assets.bloomingdales.com/feature/header-bcom/latest/images/flags/IN.png" alt="" />
                            </span>
                            <p style={{ fontSize: '12px' }}>IND</p>
                        </div>
                    </Link>
                </div>
            </div>
            <hr style={{ color: 'grey' }} />
            {/* Header Bottom */}
            <div className={styles.header_bottom}>
                <div className={styles.header_bottom_ch}>
                    <img src={Logo} style={{ width: '100%', height: '60px', paddingRight: '100px', marginTop: '-15px' }} alt="" />
                </div>


                <div style={{ display: 'flex' }} className={styles.header_bottom_ch}>
                    <div >
                        <input type="text" placeholder='Search' style={{ border: '1px solid black', width: '20rem', height: '40px' }} >
                        </input>
                    </div>
                    <div style={{ marginLeft: '25px' }}>
                        {/* To Be Done */}
                        <FaShoppingBag style={{ marginTop: '5px', fontSize: '25px', color: '#8B0909', cursor: 'pointer' }} />
                    </div>
                </div>
            </div>


            {/* navlinks */}
            <div className={styles.navlinks}>
                {
                    AllLinks.map((e) => (
                        <Link key={e.path} to={e.path}>
                            <div className={styles.linkHover} style={{ height: '35px' }}>
                                <p style={{ fontSize: '12.5px', marginTop: '5px', fontWeight: '650' }}>{e.title}</p>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Navbar