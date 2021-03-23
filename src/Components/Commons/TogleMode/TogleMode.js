import { useContext } from 'react';
import MainContext from '../../../Context/Main/MainContext';
import styles from './TogleMode.module.css'

const TogleMode = () => {
    const { mode, setMode } = useContext(MainContext)
    return (
        <div className={styles.container}>
            <span className={mode === 'Dark' ? styles.sunDark : styles.sunLight}>☀︎</span>
            <div className={styles.switchCheckbox}>
                <label className={styles.switch}>
                    <input type="checkbox" onChange={() => mode === 'Dark' ? setMode('Light') : setMode('Dark')} />
                    <span className={styles.slider}> </span>
                </label>
            </div>
            <span className={mode === 'Dark' ? styles.moonDark : styles.moonLight}>☽</span>
        </div>
    )
}

export default TogleMode;