import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
    return(
        <>
            <div className={styles.navDiv}>
                <ul className={styles.navUl}>
                    <a>Home</a>
                    <a>Projects</a>
                    <a>About</a>
                </ul>
            </div>
        </>
    )
}

export default Navbar;