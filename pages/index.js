import Link from "next/link";
import { client } from "../libs/client";


export default function Home({blog}) {

  return (
    <main>
      {blog.map((blog) => (
        <p><a href={`/blog/${blog.id}`}>{blog.title}</a></p>
      ))}
    </main>
  );
}


// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};