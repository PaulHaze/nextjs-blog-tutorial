// import Head from 'next/head';

export default function Home() {
  return (
    <div className="h-[100vh] bg-gradient-to-br from-green-300/50 to-sky-800/50 flex items-center justify-center">
      <div className="bg-white p-5 flex justify-center flex-col w-6/12 rounded-lg shadow-2xl">
        <h1 className="p-5 bg-clip-text bg-gradient-to-b from-indigo-400 to-violet-800 text-transparent font-bold  text-center">
          Im your new Tailwind Project
        </h1>
        <p className="text-[#504e63] text-center">
          Delete this and make something great
        </p>
      </div>
    </div>
  );
}
