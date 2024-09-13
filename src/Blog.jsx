import { posts } from "./posts.jsx";
import BlogCard from "./BlogCard.jsx";
import "./Blog.css";
function Blog() {
  return (
    <div className="blog-list">
      {posts.map((post) => (
        <BlogCard key={post.id} title={post.title} content={post.content} />
      ))}
    </div>
  );
}

export default Blog;
