export function Post({ title, body }) {
  return (
    <div className="flex flex-col bg-white rounded py-8 px-2">
      <h5>Title: {title}</h5>
      <hr className="text-black my-4" />
      <p className="text-gray-600">{body}</p>
    </div>
  );
}
