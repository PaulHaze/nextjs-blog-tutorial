import Link from 'next/link';
import Head from 'next/head';

import MainLayout from '../../layouts/MainLayout';

export default function FirstPost() {
  return (
    <MainLayout>
      <Head>
        <title>First Post</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="pt-10">
        <div className="flex flex-col justify-center w-11/12 p-5 mx-auto bg-white rounded-lg shadow-2xl">
          <h1 className="p-5 font-bold text-center text-transparent bg-clip-text bg-gradient-to-b from-indigo-400 to-violet-800">
            I am the first post
          </h1>
          <div className="flex justify-center space-x-3 mt-6">
            <Link href="/">
              <button
                type="button"
                className="px-4 py-2 font-semibold text-blue-400 transition duration-200 ease-in-out bg-white border rounded shadow-sm hover:shadow-md active:shadow-none hover:scale-105 active:scale-95"
              >
                Home
              </button>
            </Link>

            <Link href="/posts/1">
              <button
                type="button"
                className="px-4 py-2 font-semibold text-blue-400 transition duration-200 ease-in-out bg-white border rounded shadow-sm hover:shadow-md active:shadow-none hover:scale-105 active:scale-95"
              >
                1
              </button>
            </Link>
            <Link href="/posts/2">
              <button
                type="button"
                className="px-4 py-2 font-semibold text-blue-400 transition duration-200 ease-in-out bg-white border rounded shadow-sm hover:shadow-md active:shadow-none hover:scale-105 active:scale-95"
              >
                2
              </button>
            </Link>
            <Link href="/posts/3">
              <button
                type="button"
                className="px-4 py-2 font-semibold text-blue-400 transition duration-200 ease-in-out bg-white border rounded shadow-sm hover:shadow-md active:shadow-none hover:scale-105 active:scale-95"
              >
                3
              </button>
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
