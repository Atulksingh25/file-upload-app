// SearchFilter.js
import React, { useState } from "react";

export default function SearchFilter() {
  const [search, setSearch] = useState("");
  const users = ["Atul", "Riya", "Rohan", "Sita", "Ravi", "Aman"];

  const filtered = users.filter((u) =>
    u.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>🔍 Search Filter</h2>
      <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filtered.map((user, i) => (
          <li key={i}>{user}</li>
        ))}
      </ul>
    </div>
  );
}
