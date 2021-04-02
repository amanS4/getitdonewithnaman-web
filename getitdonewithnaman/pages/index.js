import Head from "next/head";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  let stringStartingPoint = 0;
  var myText = "Let's Get It Done!";
  var typeSpeed = 100;

  function typeWriter() {
    if (stringStartingPoint < myText.length) {
      document.getElementById("homeTitle").innerHTML += myText.charAt(
        stringStartingPoint
      );
      stringStartingPoint++;
      setTimeout(typeWriter, typeSpeed);
    }
  }
  useEffect(() => {
    typeWriter();
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Get It Done With Naman</title>
        <meta name="keywords" content="Fitness, nutrition and diet plans" />
        <link rel="icon" href="/images/logo.svg" />
      </Head>

      <h4 className={styles.title}>
        <span id="homeTitle"></span>
      </h4>
      <div className={styles.subtext}>
        <span style={{ backgroundColor: "black" }}>
          You choose your goal, I'll lead you to it.
        </span>
      </div>
      <a href="/myofferings">
        <div className={styles.offeringsButton}>View My Plans</div>
      </a>

      <footer className={styles.footer}>
        <a href="https://www.instagram.com/get.it.done.with.naman/">
          <img
            style={{ width: "2em", opacity: "0.7" }}
            alt=""
            src="/images/instagramIcon.svg"
          />
        </a>
        <div style={{ marginTop: "1em" }}>Get It Done With Naman</div>
      </footer>
    </div>
  );
}
