import styles from "../styles/Home.module.css";
import HomeBanner from "../components/HomeBanner";
import MaterialButton from "../components/MaterialButton";
import AppBar from "../components/AppBar";
export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <AppBar />
        <HomeBanner />
        <MaterialButton />
        <footer className={styles.footer}>
          <a href="https://www.instagram.com/get.it.done.with.naman/">
            <img
              style={{ width: "2em", opacity: "0.7" }}
              alt=""
              src="/images/instagramIcon.svg"
            />
          </a>
          <div style={{ marginTop: "1em" }}>Get It Done With Naman &#169; </div>
        </footer>
      </div>
    </>
  );
}
