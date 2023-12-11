import styles from "./Portfolio.module.css";
import site1 from "../../assets/site1C.jpg";
import site2 from "../../assets/site2C.jpg";
import site3 from "../../assets/site3.svg";
import site4 from "../../assets/site4.svg";

export const Portolio = () => {
  return (
    <div>
      <h2>Mon PortFolio</h2>
      <hr className={styles.hr} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, sed
        eligendi impedit <span>HTML, CSS, Javascript</span>, tempore ipsam,
        itaque officia maiores perspiciatis <span>perferendis</span> omnis
        quidem amet magni <span>consectetur</span> tenetur sequi facere
        repellendus similique culpa?
      </p>
      <div className={styles.cards}>
        <div className={styles.card}>
          <img src={site1} alt="" />
          <div className={styles.legende}>
            <h3>Responsive Design</h3>
            <a href="#">Visitez</a>
          </div>
        </div>

        <div className={styles.card}>
          <img src={site2} alt="" />
          <div className={styles.legende}>
            <h3>Web Design</h3>
            <a href="#">Visitez</a>
          </div>
        </div>

        <div className={styles.card}>
          <img src={site3} alt="" style={{width: '370px'}}/>
          <div className={styles.legende}>
            <h3>Gestion de contenus</h3>
            <a href="#">Visitez</a>
          </div>
        </div>

        <div className={styles.card}>
          <img src={site4} alt="" style={{width: '370px'}}/>
          <div className={styles.legende}>
            <h3>Et même WordPress...</h3>
            <a href="#">Visitez</a>
          </div>
        </div>
      </div>
    </div>
  );
};
