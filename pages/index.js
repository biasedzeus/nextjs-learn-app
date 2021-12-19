import Link from "next/link";
import React from "react";

const Home = () => {
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
    </div>
  );
};

export default Home;
