import Link from "next/link";
import React from "react";

const Post = ({ post }) => {
  return (
    <Link href={`posts/${post.id}`} passHref>

    <div>
        <h3>title:{post.title}</h3>
        <h3>decription:{post.body}</h3>
        <br />

    </div>
    </Link>
  );
};

export default Post;
