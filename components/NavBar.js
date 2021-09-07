import Link from 'next/link';

export function NavBar() {
  return (
    <div className="w-full py-4 px-10 bg-blue-900 flex justify-between mb-4">
      <Link href="/">
        <div className="text-white cursor-pointer">Next Js Crash Course</div>
      </Link>
      <div>
        <div className="flex space-x-3">
          <Link href="/about">
            <button
              type="button"
              className="bg-white/30 text-white tex-sm px-4 py-0.5 rounded"
            >
              About
            </button>
          </Link>
          <Link href="/posts/">
            <button
              type="button"
              className="bg-white/30 text-white tex-sm px-4 py-0.5 rounded"
            >
              Posts
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
