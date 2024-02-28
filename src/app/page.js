import Image from "next/image";
import { sql } from "@vercel/postgres";

export default async function Home() {
  const posts = await sql `SELECT * FROM posts`
  return (
  
      <div>
        <h1>posts</h1>
        <ul>
          {posts.rows.map((post) => (
            <div key={post.id}>
               <h2>{post.title}</h2>
               <h3>{post.content}</h3>

            </div>
           
           
          ))}
        </ul>
      </div>
  );
}
