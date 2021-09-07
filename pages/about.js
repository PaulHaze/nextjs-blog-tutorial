import Head from 'next/head';
import Link from 'next/link';

export default function About({ title, body }) {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <div className="flex flex-col justify-center w-3/4 p-5 mx-auto bg-white rounded-lg shadow-2xl">
        <h5 className="font-bold text-center text-transparent bg-clip-text bg-gradient-to-b from-indigo-400 to-violet-800">
          {title}
        </h5>
        <div className=" mt-2 mx-2">
          <p className="text-xs text-gray-500">{body}</p>
        </div>
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
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const { title, body } = await res.json();
  return {
    props: {
      title,
      body,
    },
  };
}

// https://jsonplaceholder.typicode.com/posts/1
/* 
{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}
*/
