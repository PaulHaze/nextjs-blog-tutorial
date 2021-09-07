import { Post } from './Post';

export function PostList({ posts }) {
  const renderPosts = posts.map(post => (
    <div
      key={post.id}
      className="flex items-center justify-center w-full my-2 border "
    >
      <Post title={post.title} body={post.body} />
    </div>
  ));
  return <>{renderPosts}</>;
}
