import React from "react";

import prisma from "@lib/prisma";

type PageProps = {
  params: { id: string };
};

const Post = async ({ params: { id } }: PageProps) => {
  const post = await prisma.post.findUnique({
    where: {
      id,
    },
  });
  return (
    <main className="min-h-screen container">
      <h1>{post?.title}</h1>
      <desc>{post?.content}</desc>
    </main>
  );
};

export default Post;
