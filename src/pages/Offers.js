import { useState } from "react"

export default function Offers() {
  const [items] = useState([
    { title: 'IPhone 15', price: 1500 },
    { title: 'Samsung S24', price: 1200 },
    { title: 'Nokia', price: 700 }
  ])

  return (
    <div>
      <h3>Latest Offers</h3>
      <div className="offers">
        {items.map(item => (
          <div key={item.title}>
            <img src="https://via.placeholder.com/350x200" alt="product" />
            <h4>{item.title}</h4>
            <p>£{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}