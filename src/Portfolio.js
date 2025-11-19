// BlogApp.jsx
import React, { useState } from "react";

export default function BlogApp() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Hello World", body: "This is the first post." },
  ]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const create = () => {
    if (!title || !body) return;
    setPosts((p) => [{ id: Date.now(), title, body }, ...p]);
    setTitle(""); setBody("");
  };

  const del = (id) => setPosts((p) => p.filter((x) => x.id !== id));

  return (
    <div style={{ padding: 20 }}>
      <h2>Blog</h2>
      <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} /><br />
      <textarea placeholder="Body" value={body} onChange={(e) => setBody(e.target.value)} />
      <br />
      <button onClick={create}>Create</button>

      <div style={{ marginTop: 20 }}>
        {posts.map((post) => (
          <div key={post.id} style={{ border: "1px solid #ddd", padding: 10, marginBottom: 8 }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button onClick={() => del(post.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
