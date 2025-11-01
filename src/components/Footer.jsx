import React from 'react'
import './footer.css'

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <strong>Gatinhos</strong> - Adoção com amor 💚💗
          <div className="muted">Rua Exemplo, 123 - Cidade</div>
        </div>
        <div className="socials">
          <a href="#" aria-label="facebook">FB</a>
          <a href="#" aria-label="instagram">IG</a>
          <a href="#" aria-label="twitter">TW</a>
        </div>
      </div>
    </footer>
  )
}
