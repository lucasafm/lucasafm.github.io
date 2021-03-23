import React, { useContext } from 'react'
import MainContext from '../../../Context/Main/MainContext'
import styles from './About.module.css'
import { aboutText } from '../../../Text'
import image from './HenryCertificate.jpg'

const About = () => {
    const { language, mode } = useContext(MainContext)
    return (
        <div id='about'>
            <div className={mode === 'Dark' ? styles.fakeDivDark : styles.fakeDivLight}></div>
            <div className={mode === 'Dark' ? styles.papaDivDark : styles.papaDivLight}>
                <div className={styles.textDiv}>
                    <p className={mode === 'Dark' ? styles.aboutTitleDark : styles.aboutTitleLight}>{aboutText.title[language]}</p>
                    <div className={mode === 'Dark' ? styles.titleUndelineDark : styles.titleUndelineLight}></div>
                    <p className={mode === 'Dark' ? styles.aboutPDark : styles.aboutPLight}>{aboutText.summary1[language]}</p>
                    <p className={mode === 'Dark' ? styles.aboutPDark : styles.aboutPLight}>{aboutText.summary2[language]}</p>
                </div>
                <div className={styles.subDivsContainer}>
                    <div className={styles.subDivFirst}>
                        <p className={mode === 'Dark' ? styles.eduTittleDark : styles.eduTittleLight}>{aboutText.education[language]}</p>
                        <div className={mode === 'Dark' ? styles.titleUndelineDark : styles.titleUndelineLight}></div>
                        <p className={mode === 'Dark' ? styles.eduSubTittleDark : styles.eduSubTittleLight}>Henry | 2020-2021 +700 hrs</p>
                        <p className={mode === 'Dark' ? styles.eduTextDark : styles.eduTextLight}>{aboutText.henry[language]}</p>
                        <a href="https://certificates.soyhenry.com/cert?id=b17781f8-bb70-4ecb-8194-6b3045892aa7"><img src={image} alt='Henry Certificate' className={styles.image}/></a>
                    </div>
                    <div className={styles.subDivSecondary}>
                        <p>lorem ipsum</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;