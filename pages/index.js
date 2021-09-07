import Head from 'next/head';
import Link from 'next/link';
// import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Blog Tutorial</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col justify-center w-3/4 p-5 mx-auto bg-white rounded-lg shadow-2xl">
        <h1 className="font-bold text-center text-transparent bg-clip-text bg-gradient-to-b from-indigo-400 to-violet-800 mb-4">
          Lets learn Next JS
        </h1>
        {/* <div className="relative mx-auto mb-5 w-[230px] sm:w-[350px] h-[450px]">
            <Image
              src="/images/the_gem_seller.jpg"
              layout="fill"
              objectFit="contain"
            />
          </div> */}
        <div className="flex justify-center space-x-3">
          <Link href="/about">
            <button
              type="button"
              className="px-4 py-2 font-semibold text-blue-400 transition duration-200 ease-in-out bg-white border rounded shadow-sm hover:shadow-md active:shadow-none hover:scale-105 active:scale-95"
            >
              About
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
  );
}
