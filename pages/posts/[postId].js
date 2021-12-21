import { useRouter } from "next/router";
import React from "react";

const PostDes = ({ post }) => {
  const router = useRouter();
  function handleOnClick() {
    router.push("/posts/");
  }

  return (
    <div>
      <h2>{post.id}</h2>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <button onClick={handleOnClick}>All Posts</button>
    </div>
  );
};

export default PostDes;

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  const paths = data.map((post) => {
    return {
      params: {
        postId: `${post.id}`,
      },
    };
  });

  return {
    // paths: [
    //   {
    //     params: { postId: "1" },
    //   },
    //   {
    //     params: { postId: "2" },
    //   },
    //   {
    //     params: { postId: "3" },
    //   },
    //   {
    //     params: { postId: "4" },
    //   },
    // ],

    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );

  const data = await res.json();
  return {
    props: {
      post: data,
    },
  };
}
