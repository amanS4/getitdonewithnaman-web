import React from "react";
import { useRouter } from "next/router";
export default function anyName() {
  const router = useRouter();
  const { all } = router.query;
  console.log(all);
  return <div>Cart Page</div>;
}
