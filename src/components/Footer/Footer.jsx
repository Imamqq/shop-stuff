import React from 'react'
import { Link } from 'react-router-dom'

import styles from '../../styles/Footer.module.css'
import LOGO from '../../images/logo.svg'

import { ROUTES } from '../../utils/routes'



const Footer = () => {
    return (
        <section className={styles.footer}>
            <div className={styles.logo}>
                <Link to={ROUTES.HOME}>
                    <img src={LOGO} alt="logo" />
                </Link>
            </div>

            <div className={styles.rights}>
                Developed by <a href='#!'>Imam </a> 😎
            </div>

            <div className={styles.socials}>
                <a href='#!' rel="noreferrer">
                    <svg className='icon'>
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
                    </svg>
                </a>

                <a href='#!' rel="noreferrer">
                    <svg className='icon'>
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`} />
                    </svg>
                </a>

                <a href='#!' rel="noreferrer">
                    <svg className='icon'>
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`} />
                    </svg>
                </a>
            </div>
        </section>
    )
}

export default Footer

