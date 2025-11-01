import React from 'react'
import './store.css'
import products from '../utils/products'

export default function Store(){
  return (
    <div className="container">
      <h2>Loja - Produtos para gatos</h2>
      <p>Produtos selecionados para o seu gatinho.</p>
      <div className="grid cols-4" style={{marginTop:18}}>
        {products.map(p => (
          <div className="product-card" key={p.id}>
            <img src={p.img} alt={p.name} />
            <div className="prod-body">
              <h4>{p.name}</h4>
              <p className="price">R$ {p.price.toFixed(2)}</p>
              <p className="muted">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
