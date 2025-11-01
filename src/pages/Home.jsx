import React from 'react'
import './home.css'
import Hero from '../sections/Hero'
import AdoptSection from '../sections/AdoptSection'

export default function Home(){
  return (
    <div>
      <Hero />
      <div className="container">
        <section className="info-cards">
          <div className="card">
            <h3>Quem somos</h3>
            <p>Conectamos gatinhos a famílias responsáveis e cheias de amor. Cuidamos da saúde e do bem-estar de cada animal.</p>
          </div>
          <div className="card">
            <h3>Como adotar</h3>
            <p>Preencha o formulário de adoção, teremos uma conversa e avaliaremos o melhor match entre família e gatinho.</p>
          </div>
          <div className="card">
            <h3>Doe e ajude</h3>
            <p>Doações ajudam com vacinas, alimentação e abrigo. Toda ajuda é muito bem-vinda!</p>
          </div>
        </section>

        <AdoptSection />

      </div>
    </div>
  )
}
