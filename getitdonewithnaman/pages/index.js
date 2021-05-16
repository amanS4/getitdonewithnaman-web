import AboutMeSection from "../components/AboutMeSection";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.homeBackgroundImage}>
        <AppBar />
        <div
          style={{
            paddingTop: "46vh",
            paddingLeft: "9px",
            display: "flex",
            flexDirection: "column",
            width: "42%",
          }}
        >
          <img
            style={{ width: "99%" }}
            alt="My Plans button"
            src="/images/MyPlansButton.svg"
          />
          <img
            style={{ width: "99%", paddingLeft: "1px", paddingTop: "12px" }}
            alt="about me button"
            src="/images/AboutMeButton.svg"
          />
        </div>
      </div>
      <AboutMeSection />
      <Footer />
    </>
  );
}
