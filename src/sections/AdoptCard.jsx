import React from 'react'
import './adopt.css'

export default function AdoptCard({ cat }) {
  return (
    <div className="adopt-card">
      <img src={cat.image} alt={cat.name} />
      <h4>{cat.name}</h4>
      <p>{cat.description}</p>
    </div>
  )
}

