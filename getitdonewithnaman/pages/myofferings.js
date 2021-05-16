import AppBar from "../components/AppBar";
import PlanCard from "../components/PlanCard";
import styles from "../styles/HeadBanner.module.css";
export default function myofferings() {
  return (
    <>
      <AppBar titleText={"My Plans"} />
      <section
        style={{ padding: "125px 0px", marginTop: "-65px" }}
        className={styles.headBanner}
      >
        <h4 style={{ margin: "25px" }}>
          <span style={{ color: "white" }}>
            {" "}
            Every plan is fully personalized around your habits, tastes, and
            routine.
          </span>
        </h4>
        <div style={{ margin: "25px" }}>
          <span style={{ color: "white" }}>
            My Goal is not only to make you achieve yours but to do that in a
            sustainable and tastier fashion
          </span>
        </div>
      </section>
      <PlanCard />
      <PlanCard />
      <PlanCard />
    </>
  );
}
