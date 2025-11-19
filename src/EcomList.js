// EcomList.jsx
import React, { useMemo, useState } from "react";

const PRODUCTS = [
  { id:1, title:"Shirt", price:499, category:"Clothing" },
  { id:2, title:"Headphones", price:2499, category:"Electronics" },
  { id:3, title:"Shoes", price:1299, category:"Footwear" },
  // add more
];

export default function EcomList() {
  const [cart, setCart] = useState([]);
  const [q, setQ] = useState("");
  const [sort, setSort] = useState("none");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    let res = PRODUCTS.filter(p =>
      p.title.toLowerCase().includes(q.toLowerCase()) &&
      (category === "All" ? true : p.category === category)
    );
    if (sort === "low") res = res.sort((a,b)=>a.price-b.price);
    if (sort === "high") res = res.sort((a,b)=>b.price-a.price);
    return res;
  }, [q, sort, category]);

  const add = (p) => setCart(prev => [...prev, p]);

  return (
    <div style={{padding:20}}>
      <h2>Products</h2>
      <div style={{display:"flex",gap:10,marginBottom:10}}>
        <input placeholder="Search" value={q} onChange={e=>setQ(e.target.value)} />
        <select value={category} onChange={e=>setCategory(e.target.value)}>
          <option>All</option><option>Clothing</option><option>Electronics</option><option>Footwear</option>
        </select>
        <select value={sort} onChange={e=>setSort(e.target.value)}>
          <option value="none">Sort</option>
          <option value="low">Price Low→High</option>
          <option value="high">Price High→Low</option>
        </select>
      </div>

      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:12}}>
        {filtered.map(p => (
          <div key={p.id} style={{border:"1px solid #ddd",padding:12}}>
            <h4>{p.title}</h4>
            <p>₹{p.price}</p>
            <p style={{fontSize:12,color:"#666"}}>{p.category}</p>
            <button onClick={()=>add(p)}>Add to cart</button>
          </div>
        ))}
      </div>

      <div style={{marginTop:20}}>
        <h3>Cart ({cart.length})</h3>
        {cart.map((c,i)=><div key={i}>{c.title} - ₹{c.price}</div>)}
      </div>
    </div>
  );
}
