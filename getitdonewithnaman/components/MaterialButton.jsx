import styles from "../styles/MaterialButton.module.css";
import Link from "next/link";
export default function MaterialButton() {
  return (
    <Link href="/myofferings">
      <div className={styles.offeringsButton}>
        <p style={{ color: "white", paddingTop: "0.8em" }}>View My Plans</p>
      </div>
    </Link>
  );
}
