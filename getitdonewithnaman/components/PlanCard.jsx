import styles from "../styles/PlanCard.module.css";
export default function PlanCard() {
  return (
    <div className={styles.center}>
      <div className={styles.propertyCard}>
        <a href="#">
          <div className={styles.propertyImage}>
            <div className={styles.propertyImageTitle}>
              Optional <h5>Card Title</h5> If you want it, turn on the CSS also.
            </div>
          </div>
        </a>
        <div className={styles.propertyDescription}>
          <h5> Card Title </h5>
          <p>
            Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More
            Bingo. Lorem Ipum doth be hard.
          </p>
        </div>
        <a href="#">
          <div className={styles.propertySocialIcons}></div>
        </a>
      </div>
    </div>
  );
}
