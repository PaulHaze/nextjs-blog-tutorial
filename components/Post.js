/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import Link from 'next/link';

export function Post({ post }) {
  return (
    <div className="flex items-center justify-center w-full my-2 ">
      <Link href={`/posts/${post.id}`}>
        <div className="bg-white rounded py-8 px-2 cursor-pointer hover:ring-1 hover:ring-blue-500 ">
          <h5>Title: {post.title}</h5>
          <hr className="text-black my-4" />
          <p className="text-gray-600">{post.body}</p>
        </div>
      </Link>
    </div>
  );
}

/* 
    <div
      key={post.id}
      className="flex items-center justify-center w-full my-2 border "
    >
      <Post post={post} title={post.title} body={post.body} />
    </div>
*/
