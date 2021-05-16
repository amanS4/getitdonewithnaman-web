export default function Footer() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <a href="https://www.instagram.com/get.it.done.with.naman/">
        <img
          style={{ width: "2em", opacity: "0.7" }}
          alt=""
          src="/images/instagramIcon.svg"
        />
      </a>
      <div style={{ marginTop: "1em" }}>Get It Done With Naman &#169; </div>
    </div>
  );
}
