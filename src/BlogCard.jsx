import React from "react";

function BlogCard({ title, content }) {
  return (
    <div className="blog-card">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}

export default BlogCard;
