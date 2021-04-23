import React, { useContext } from 'react'
import styles from './Flags.module.css'
import MainContext from '../../../Context/Main/MainContext';
import { flagsText } from '../../../Text'
import UK from './UK.png'
import Spain from './Spain.png'
import Brazil from './Brazil.png'

const Flags = () => {
    const { language, setLanguage, mode } = useContext(MainContext)
    return (
        <>
            <div className={styles.flagsDiv}>
                <img className={styles.flag} src={UK} alt={'hola'} height='25' onClick={()=>setLanguage('EN')}/>
                <img className={styles.flag} src={Spain} alt={flagsText.altSpain[mode]} height='25' onClick={()=>setLanguage('ES')}/>
                <img className={styles.flag} src={Brazil} alt={flagsText.altBrazil[mode]} height='25' onClick={()=>setLanguage('PT')}/>
            </div>
        </>
    )
}

export default Flags;