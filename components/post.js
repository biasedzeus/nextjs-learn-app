import Link from "next/link";
import React from "react";

const Post = ({ post }) => {
  return (
    <Link href={`posts/${post.id}`} passHref>
      <div>
        <h3>Id:{post.id}</h3>
        <h3>title:{post.title}</h3>
        <hr/>
        <br />
      </div>
    </Link>
  );
};

export default Post;
