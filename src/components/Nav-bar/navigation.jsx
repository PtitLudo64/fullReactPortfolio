import styles from "./navigation.module.css";

export const NavBar = () => {
  return (
    <div className={styles.main}>
      <a href="/">
        <h1 className={styles.Logo}>Ludovic&nbsp;PAJOR</h1>
      </a>
      <nav className={styles.navigation}>
        <ul className={styles.navigation}>
          <li className={styles.nav_list}>
            <a href="/">Portfolio</a>
          </li>
          <li className={styles.nav_list}>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
