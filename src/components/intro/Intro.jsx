import styles from './Intro.module.css';
import { Animation } from '../Animation/Animation';

export const Intro = () => {
    return <div className={styles.root}>
        <h2 className={styles.title}>Développeur et Designer WEB</h2>
        <hr style={{ color: '#FF0000', backgroundColor: '#f00', height: '3px', width: '50%', padding: '0rem', margin: '0.5rem' }} />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, natus!</p>
        <button>Prenons contact</button>
        <Animation />
    </div>;
}