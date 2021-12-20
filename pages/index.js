import Link from "next/link";
const Home = () => {
  return (
    <div>
      <h1>Next Js SG pre-rendering with data</h1>
      <Link href="/users">
        <a>Users</a>
      </Link>
      <Link href="/posts">
        <a>Posts</a>
      </Link>
    </div>
  );
};

export default Home;
