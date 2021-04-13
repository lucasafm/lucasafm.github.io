import React, { useContext } from 'react'
import MainContext from '../../../Context/Main/MainContext'
import styles from './Projects.module.css'
import { projectsText } from '../../../Text'

const Projects = () => {
    const { language, mode } = useContext(MainContext)
    return (
        <div className={mode === 'Dark' ? styles.papaDivDark : styles.papaDivLight} id='projects'>
            <div className={mode === 'Dark' ? styles.fakeDivDark : styles.fakeDivLight}></div>
            <div className={styles.contentDiv}>
                <p className={mode === 'Dark' ? styles.projectsPDark : styles.projectsPLight}>{projectsText.p[language]}</p>
            </div>
        </div>
    )
}

export default Projects;