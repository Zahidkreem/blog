import Image from "next/image";
import { Inter } from "next/font/google";
import { PostCard, Categories, PostWidget } from "@/components";
const inter = Inter({ subsets: ["latin"] });

const posts = [
  { title: "React Testing", excerpt: "Learn React Testing" },
  { title: "Web Development", excerpt: "Learn web development" },
];

export default function Home() {
  return (
    <main className="">
      <div className="grid grid-cols-12 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8 ">
          {posts.map((post) => (
            <PostCard post={post} key={post.title} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4 ">
          <div className="lg:sticky relative top-8"></div>
          <PostWidget />
          <Categories />
        </div>
      </div>
    </main>
  );
}
