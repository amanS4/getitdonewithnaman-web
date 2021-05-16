import { useEffect } from "react";
import styles from "../styles/HeadBanner.module.css";
export default function HomeBanner() {
  let stringStartingPoint = 0;
  let myText = "Let's Get It Done!";
  let typeSpeed = 100;
  let timeOut = "";
  function typeWriter() {
    if (stringStartingPoint < myText.length) {
      document.getElementById("homeTitle").innerHTML +=
        myText.charAt(stringStartingPoint);
      stringStartingPoint++;
      timeOut = setTimeout(typeWriter, typeSpeed);
    }
  }
  useEffect(() => {
    if (document.getElementById("homeTitle")) {
      typeWriter();
    }
    return () => clearTimeout(timeOut);
  }, []);
  return (
    <section className={styles.headBanner}>
      <h4 className={styles.title}>
        <span id="homeTitle"></span>
      </h4>
      <div className={styles.subtext}>
        <span>You choose your goal, I'll lead you to it.</span>
      </div>
    </section>
  );
}
