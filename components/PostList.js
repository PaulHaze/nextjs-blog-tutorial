import { Post } from './Post';

export function PostList({ posts }) {
  return (
    <>
      {posts.map(post => (
        <Post key={post.id} post={post} title={post.title} body={post.body} />
      ))}
    </>
  );
}
