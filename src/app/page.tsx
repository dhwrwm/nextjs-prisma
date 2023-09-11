import React from "react";

import prisma from "@lib/prisma";

const Home = async () => {
  const posts = await prisma.post.findMany();
  return (
    <main className="min-h-screen container">
      <h1>Hello</h1>
      <ul>
        {posts?.map((_p, index) => (
          <li key={index}>{_p.title}</li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
