import React from 'react'
import styles from './Footer.module.css'
import { FaFacebookF, FaPinterestSquare, FaTabletAlt, FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.footer_top}>
                <div>
                    <h3 style={{ fontWeight: '500' }}>CUSTOMER SERVICE</h3>
                    <p>1-800-777-0000</p>
                    <p>FAQs & Help</p>
                    <p>Visitor Services</p>
                    <p>Domestic Site FAQs</p>
                    <p>Shipping to to the U.S. Site</p>
                </div>
                <div>
                    <h3 style={{ fontWeight: '500' }}>YOUR ORDER</h3>
                    <p>Order Status & History</p>
                    <p>Shipping Policy</p>
                    <p>Returns & Exchanges</p>
                </div>
                <div>
                    <h3 style={{ fontWeight: '500' }}>ABOUT BOOMINGDEAL'S</h3>
                    <p>About Us</p>
                    <p>b the change</p>
                    <p>Careers</p>
                </div>
                <div className={styles.footer_icons}>
                    <h3 style={{ fontWeight: '500', marginLeft:'5px' }}>FOLLOW US</h3>
                    <div>
                        <div>
                            <FaTabletAlt style={{ margin: '10px 20px', height: '25px', width:'30px', cursor: 'pointer' }} />
                        </div>
                        <div>
                            <FaInstagram style={{ margin: '10px 20px', height: '25px', width:'30px', cursor: 'pointer' }}/>
                        </div>
                        <div>
                            <FaPinterestSquare style={{ margin: '12px 20px', height: '25px', width:'30px', cursor: 'pointer' }} />
                        </div>
                        <div>
                            <FaFacebookF style={{ margin: '10px 20px', height: '25px', width:'30px', cursor: 'pointer' }} />
                        </div>
                        <div>
                            <FaTwitter style={{ margin: '10px 20px', height: '25px', width:'30px', cursor: 'pointer' }} />
                        </div>
                    </div>
                </div>
            </div>


            <div className={styles.footer_bottom}>

            </div>
        </div>
    )
}

export default Footer