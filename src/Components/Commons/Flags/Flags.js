import React, { useContext } from 'react'
import styles from './Flags.module.css'
import MainContext from '../../../Context/Main/MainContext';

const Flags = () => {
    const { language, setLanguage, mode } = useContext(MainContext)
    return (
        <>
            <div className={styles.flagsDiv}>
                <button 
                    className={(language === 'EN') && (mode === 'Dark') ? styles.flagSelDark : ((language === 'EN') && (mode === 'Light')) ? styles.flagSelLight : (mode === 'Dark') ? styles.flagsDark : styles.flagsLight}
                    onClick={()=>setLanguage('EN')}
                >EN</button>
                <button 
                    className={(language === 'ES') && (mode === 'Dark') ? styles.flagSelDark : ((language === 'ES') && (mode === 'Light')) ? styles.flagSelLight : (mode === 'Dark') ? styles.flagsDark : styles.flagsLight} 
                    onClick={()=>setLanguage('ES')}
                >ES</button>
                <button 
                    className={(language === 'PT') && (mode === 'Dark') ? styles.flagSelDark : ((language === 'PT') && (mode === 'Light')) ? styles.flagSelLight : (mode === 'Dark') ? styles.flagsDark : styles.flagsLight} 
                    onClick={()=>setLanguage('PT')}
                >PT</button>
            </div>
        </>
    )
}

export default Flags;