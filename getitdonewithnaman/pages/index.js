import AboutMeSection from "../components/AboutMeSection";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className={styles.homeBackgroundImage}>
        <AppBar />
        <div
          style={{
            paddingTop: "38vh",
            paddingLeft: "9px",
            display: "flex",
            flexDirection: "column",
            width: "42%",
          }}
        >
          <img
            onClick={() => router.push("/myofferings")}
            style={{ width: "99%" }}
            alt="My Plans button"
            src="/images/MyPlansButton.svg"
          />
          <img
            onClick={() => {
              document
                .getElementById("aboutMe")
                .scrollIntoView({ behavior: "smooth" });
            }}
            style={{ width: "99%", paddingLeft: "1px", paddingTop: "12px" }}
            alt="about me button"
            src="/images/AboutMeButton.svg"
          />
        </div>
      </div>
      <div id="aboutMe">
        <AboutMeSection />
      </div>
      <Footer />
    </>
  );
}
