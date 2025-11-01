import React from 'react'
import './hero.css'
import CatHero from '../assets/cat-hero.png'

export default function Hero(){
  return (
    <section className="hero">
      <div className="hero-shape" />
      <div className="container hero-inner">
        <div className="hero-text">
          <h2>Encontre seu novo melhor amigo</h2>
          <p>Adote um gatinho e transforme duas vidas: a sua e a dele.</p>
          <div className="hero-cta">
            <a href="/adopt" className="btn primary">Ver Gatinhos</a>
            <a href="/contact" className="btn ghost">Fale Conosco</a>
          </div>
        </div>
        <div className="hero-image">
          <img src={CatHero} alt="gato fofo" />
        </div>
      </div>
    </section>
  )
}
