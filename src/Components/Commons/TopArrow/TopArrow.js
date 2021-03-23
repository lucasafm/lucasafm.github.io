import React, { useContext } from 'react'
import styles from './TopArrow.module.css'
import { FaChevronUp } from 'react-icons/fa'
import MainContext from '../../../Context/Main/MainContext'

const TopArrow = () => {
    const { mode } = useContext(MainContext)
    return (
        <>
        <div className={mode === 'Dark' ? styles.topArrowDivDark : styles.topArrowDivLight}>
            <a href='#' ><FaChevronUp className={mode === 'Dark' ? styles.topArrowArrowDark : styles.topArrowArrowLight}/> </a>
        </div>
        </>
    )
}

export default TopArrow;