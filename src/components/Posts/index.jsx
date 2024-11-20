import { PostCard } from "../PostCard"

export const Posts = ({ posts }) => {
  return (
  <div className="posts">
    {posts.map((post) => (
      <PostCard 
        key={post.id}
        cover={post.cover}
        title={post.title}
        id={post.id}
        body={post.body}
      />
    ))}
  </div>
  )
}