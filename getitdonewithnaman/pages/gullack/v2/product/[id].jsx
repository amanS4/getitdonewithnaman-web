import React, { useEffect } from "react";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  return { props: { context: "1", productData: [{}, {}] } };
}

export default function productPage(props) {
  const { context, productData } = props;
  const router = useRouter();
  useEffect(() => {
    console.log(context);
  }, []);
  return <div>Hiii {context}</div>;
}
