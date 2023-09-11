import React from "react";

import prisma from "@lib/prisma";
import Link from "next/link";

const Home = async () => {
  const posts = await prisma.post.findMany();
  return (
    <main className="min-h-screen container mt-5">
      <h1>Hello</h1>
      <div>
        {posts?.map((_p, index) => (
          <Link href={`/post/${_p.id}`} key={index}>
            {_p.title}
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Home;
