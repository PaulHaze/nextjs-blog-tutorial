import Head from 'next/head';

import { PostList } from '../../components';

export default function Posts({ posts }) {
  console.log(posts);
  return (
    <div>
      <Head>
        <title>Posts</title>
      </Head>

      <div className="max-w-2xl mx-auto">
        <PostList posts={posts} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_page=1');
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}
