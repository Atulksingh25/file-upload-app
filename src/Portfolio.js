import React from "react";

export default function Portfolio() {
  return (
    <div style={{fontFamily:"sans-serif"}}>
      <header style={{padding:20,background:"#222",color:"#fff"}}>
        <h1>Your Name</h1>
        <p>Frontend Developer — React | JS</p>
      </header>
      <section style={{padding:20}}>
        <h2>Projects</h2>
        <ul>
          <li><a href="#">Project 1</a> - Short desc</li>
          <li><a href="#">Project 2</a> - Short desc</li>
        </ul>
      </section>
      <section style={{padding:20}}>
        <h2>Contact</h2>
        <p>Email: you@example.com</p>
      </section>
    </div>
  );
}