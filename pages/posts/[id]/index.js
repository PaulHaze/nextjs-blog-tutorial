import Link from 'next/link';
import Head from 'next/head';

export default function IdPost({ post }) {
  return (
    <>
      <Head>
        <title>Id Post</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="pt-10">
        <div className="flex flex-col justify-center p-5 mx-auto bg-white rounded-lg shadow-2xl">
          <div className="flex justify-between">
            <h1 className="flex w-3/4 p-5 font-bold text-transparent bg-clip-text bg-gradient-to-b from-indigo-400 to-violet-800">
              {post.title}
            </h1>
            <h5 className="flex-2">Id: {post.id}</h5>
          </div>
          <h5 className="text-coolgray-400 px-5">{post.body} </h5>
          <div className="flex justify-center space-x-3 mt-6">
            <Link href="/">
              <button
                type="button"
                className="px-4 py-2 font-semibold text-blue-400 transition duration-200 ease-in-out bg-white border rounded shadow-sm hover:shadow-md active:shadow-none hover:scale-105 active:scale-95"
              >
                Home
              </button>
            </Link>
            <Link href="/posts/">
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
    </>
  );
}

/* export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
  );
  const post = await res.json();
  return {
    props: {
      post,
    },
  };
} */

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  const ids = posts.map(post => post.id);
  const paths = ids.map(id => ({
    params: { id: id.toString() },
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
