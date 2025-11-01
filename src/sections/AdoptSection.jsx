import React, { useEffect, useState } from 'react'
import './adopt.css'
import AdoptCard from './AdoptCard'

export default function AdoptSection() {
  const [cats, setCats] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=4")
        const data = await response.json()

        // Gera nomes aleatórios fofos para os gatinhos
        const catNames = ["Luna", "Mimi", "Theo", "Nina", "Oliver", "Lily", "Simba", "Cleo", "Toby", "Maya"]

        const catsWithNames = data.map((cat, index) => ({
          id: cat.id || index,
          name: catNames[index % catNames.length],
          description: "Um gatinho adorável esperando um lar 🐾",
          image: cat.url
        }))

        setCats(catsWithNames)
        setLoading(false)
      } catch (err) {
        console.error("Erro ao buscar gatos:", err)
        setError(true)
        setLoading(false)
      }
    }

    fetchCats()
  }, [])

  if (loading) {
    return (
      <section id="adopt" style={{ marginTop: 32 }}>
        <h3>Gatinhos em destaque</h3>
        <p>Carregando gatinhos fofos...</p>
      </section>
    )
  }

  if (error) {
    return (
      <section id="adopt" style={{ marginTop: 32 }}>
        <h3>Gatinhos em destaque</h3>
        <p>Não foi possível carregar os gatinhos 😿</p>
      </section>
    )
  }

  return (
    <section id="adopt" style={{ marginTop: 32 }}>
      <h3>Gatinhos em destaque</h3>
      <p>Alguns dos gatinhos que aguardam um lar amoroso.</p>
      <div className="grid cols-4" style={{ marginTop: 18 }}>
        {cats.map(c => <AdoptCard key={c.id} cat={c} />)}
      </div>
    </section>
  )
}
