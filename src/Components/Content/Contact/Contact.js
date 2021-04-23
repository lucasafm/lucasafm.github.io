import React, { useContext } from 'react'
import MainContext from '../../../Context/Main/MainContext'
import styles from './Contact.module.css'
import { contactText } from '../../../Text'
import { SiGithub } from 'react-icons/si'
import { FaLinkedinIn } from 'react-icons/fa'

const Contact = () => {
    const { language, mode } = useContext(MainContext)
    return (
        <div id='contact' className={mode === 'Dark' ? styles.bigDivDark : styles.bigDivLight}>
            <div className={mode === 'Dark' ? styles.fakeDivDark : styles.fakeDivLight}></div>
            <div className={styles.textDiv}>
                <p className={mode === 'Dark' ? styles.titleDark : styles.titleLight}>{contactText.p[language]}</p>
                <div className={mode === 'Dark' ? styles.titleUndelineDark : styles.titleUndelineLight}></div>
                <div className={styles.iconsDiv}>
                    <a href='https://www.linkedin.com/in/lucasafernandezmorales'>
                        <div className={mode === 'Dark' ? styles.circleDark : styles.circleLight}>
                            <FaLinkedinIn className={mode === 'Dark' ? styles.iconDark : styles.iconLight} />
                        </div>
                    </a>
                    <a href='https://github.com/lucasafm'>
                        <div className={mode === 'Dark' ? styles.circleDark : styles.circleLight}>
                            <SiGithub className={mode === 'Dark' ? styles.iconDark : styles.iconLight} />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact;