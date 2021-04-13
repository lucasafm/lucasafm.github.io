import React, { useContext } from 'react'
import MainContext from '../../../Context/Main/MainContext'
import styles from './Footer.module.css'

const Footer = () => {
    const { mode } = useContext(MainContext)
    return (
        <>
            <div className={mode === 'Dark' ? styles.divFooterDark : styles.divFooterLight}>
                <p className={mode === 'Dark' ? styles.footerPDark : styles.footerPLight}>© 2021 Lucas A Fernandez Morales</p>
            </div>
        </>
    )
}

export default Footer;