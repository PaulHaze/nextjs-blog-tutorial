import Link from 'next/link';
import Head from 'next/head';

import MainLayout from '../../layouts/MainLayout';

export default function IdPost({ params }) {
  return (
    <MainLayout>
      <Head>
        <title>Id Post</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="pt-10">
        <div className="flex flex-col justify-center w-6/12 p-5 mx-auto bg-white rounded-lg shadow-2xl text-center">
          <h1 className="p-5 font-bold  text-transparent bg-clip-text bg-gradient-to-b from-indigo-400 to-violet-800">
            I am An Id Post
          </h1>
          <h5 className="text-coolgray-400">Post Id: </h5>
          <div className="flex justify-center space-x-3 mt-6">
            <Link href="/">
              <button
                type="button"
                className="px-4 py-2 font-semibold text-blue-400 transition duration-200 ease-in-out bg-white border rounded shadow-sm hover:shadow-md active:shadow-none hover:scale-105 active:scale-95"
              >
                Home
              </button>
            </Link>
            <Link href="/posts/first-post">
              <button
                type="button"
                className="px-4 py-2 font-semibold text-blue-400 transition duration-200 ease-in-out bg-white border rounded shadow-sm hover:shadow-md active:shadow-none hover:scale-105 active:scale-95"
              >
                Posts
              </button>
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_page=1');
  const posts = await res.json();

  const paths = posts.map(post => ({
    params: { id: post.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
  );
  const post = await res.json();
  return {
    props: {
      post,
    },
  };
}
