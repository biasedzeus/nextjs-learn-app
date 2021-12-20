import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
const Home = () => {
  const router = useRouter();

  function handleClick() {
    console.log("placing order");
    // router.push("/products/");
    router.replace("/products/")
  }

  return (
    <div>
      <h1>Home</h1>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <Link href="/products">
        <a>products</a>
      </Link>
      <Link href="/docs">
        <a>Docs</a>
      </Link>

      <button onClick={handleClick}>Place Order</button>
    </div>
  );
};

export default Home;
