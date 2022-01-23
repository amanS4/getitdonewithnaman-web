import { useEffect, useRef } from "react";
import AboutMeSection from "../components/AboutMeSection";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const aboutMe = useRef(<></>);
  const { okmybad } = router.query;
  useEffect(() => {
    const searchParams = window.location.search;
    console.log("search params", okmybad);
  }, [okmybad]);

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
            onClick={() => router.push("/myofferings", "cart")}
            style={{ width: "99%" }}
            alt="My Plans button"
            src="/images/MyPlansButton.svg"
          />
          <img
            onClick={() => {
              aboutMe.current.scrollIntoView({ behavior: "smooth" });
            }}
            style={{ width: "99%", paddingLeft: "1px", paddingTop: "12px" }}
            alt="about me button"
            src="/images/AboutMeButton.svg"
          />
        </div>
      </div>
      <div ref={aboutMe}>
        <AboutMeSection />
      </div>
      <Footer />
    </>
  );
}
