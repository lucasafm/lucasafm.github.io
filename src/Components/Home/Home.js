import React, { useContext } from 'react'
import styles from './Home.module.css'
import MainContext from '../../Context/Main/MainContext'
import { homeText } from '../../Text'

const Home = () => {
    const { language, mode, setLanguage } = useContext(MainContext)
    return (
        <div className={styles.homeDiv}>
            <div className={styles.homeContainer}>
                <div className={mode === 'Dark' ? styles.fakeDark : styles.fakeLight}></div>
                <div className={styles.homeTextDiv}>
                    <p className={mode === 'Dark' ? styles.homeADark : styles.homeALight}>{homeText.A[language]}</p>
                    <p className={mode === 'Dark' ? styles.homePDark : styles.homePLight}>{homeText.P[language]}</p>
                    <div className={styles.lanDiv}>
                        <p className={mode === 'Dark' ? styles.lanPDark : styles.lanPLight} onClick={()=>{setLanguage('EN')}}>English</p>
                        <p className={mode === 'Dark' ? styles.lanPDark : styles.lanPLight} onClick={()=>{setLanguage('ES')}}>Español</p>
                        <p className={mode === 'Dark' ? styles.lanPDark : styles.lanPLight} onClick={()=>{setLanguage('PT')}}>Português</p>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default Home;