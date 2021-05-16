import styles from "../styles/AppBar.module.css";
import { Sling as Hamburger } from "hamburger-react";
import fire from "../config/fire-config";

export default function AppBar(props) {
  const { titleText } = props;
  return (
    <div className={styles.menuBar}>
      <div
        style={{
          flexBasis: "15%",
          justifyContent: "center",
          color: "#f4851e",
          display: "flex",
        }}
      >
        <Hamburger />
      </div>
      {titleText ? (
        <div
          style={{
            color: "rgb(244, 133, 30)",
            display: "flex",
            alignItems: "center",
            flexBasis: "50%",
            fontSize: "20px",
            marginLeft: "14px",
          }}
        >
          {titleText}
        </div>
      ) : (
        <img
          onClick={() =>
            fire.firestore().collection("user-form").add({
              id: "01",
              name: "Aman Singh",
              age: 20,
              mobile: "8699833080",
              plan: "4-week-diet-workout",
            })
          }
          className={styles.logo}
          alt="page logo"
          src="/images/namanLogo.png"
        />
      )}
    </div>
  );
}
