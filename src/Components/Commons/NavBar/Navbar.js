import React, { useContext } from 'react'
import styles from './Navbar.module.css'
import Flags from '../Flags/Flags'
import MainContext from '../../../Context/Main/MainContext'
import TogleMode from '../TogleMode/TogleMode'
import { navText } from '../../../Text'

const Navbar = () => {
    const { language, mode } = useContext(MainContext)
    return(
        <>
            <div className={styles.fakeDiv}></div>
            <div className={mode === 'Dark' ? styles.navDivDark : styles.navDivLight}>
                <TogleMode />
                <div className={styles.navUl}>
                    <a href='#about' className={mode === 'Dark' ? styles.navADark : styles.navALight}>{navText.About[language]}</a>
                    <a href='#projects' className={mode === 'Dark' ? styles.navADark : styles.navALight}>{navText.Projects[language]}</a>    
                    <div className={mode === 'Dark' ? styles.navFlagsDark : styles.navFlagsLight}>
                        <Flags />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;