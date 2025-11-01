import React from 'react'
import { Link } from 'react-router-dom'
export default function NotFound(){
  return (
    <div className="container" style={{textAlign:'center'}}>
      <h2>404 - Página não encontrada 🐾</h2>
      <p>Ops! Esse caminho é uma rua sem saída felina.</p>
      <Link to="/" style={{color:'var(--verde-escuro)', fontWeight:700}}>Voltar para a Home</Link>
    </div>
  )
}
