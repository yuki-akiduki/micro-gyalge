import { client } from "../../libs/client";

const BlogId = ({blog}) => {
  return (
    <div>
      <h1>{blog.title}</h1>
      <div>
        {blog.text}
      </div>
    </div>
  )
}

export default BlogId

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};