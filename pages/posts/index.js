import Head from 'next/head';
import MainLayout from '../../layouts/MainLayout';

import { PostList } from '../../components';

export default function Posts({ posts }) {
  console.log(posts);
  return (
    <div>
      <Head>
        <title>Posts</title>
      </Head>
      <MainLayout>
        <div className="">
          <PostList posts={posts} />
        </div>
      </MainLayout>
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
