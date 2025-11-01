import React, { useEffect, useState } from 'react'
import './adopt-page.css'
import { mockCats } from '../utils/mockCats'

// TheCatAPI endpoint (public, no token required)
const CAT_API = "https://api.thecatapi.com/v1/images/search?limit=10";

export default function Adopt(){
  const [cats, setCats] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(()=>{
    let mounted = true
    async function fetchCats(){
      try{
        const res = await fetch(CAT_API)
        const data = await res.json()
        // data is array of {id, url, ...}
        if(mounted){
          // map to our cat shape, generate a name from mock list
          const names = ['Luna','Mimi','Nina','Sol','Thor','Theo','Loki','Bella','Olivia','Simba']
          const catsMapped = data.map((item, i) => ({
            id: item.id || i,
            img: item.url,
            name: names[i % names.length],
            desc: 'Gatinho disponível para adoção.'
          }))
          setCats(catsMapped)
          setLoading(false)
        }
      }catch(err){
        console.warn('TheCatAPI fetch failed, using mock', err)
        if(mounted){
          setCats(mockCats)
          setError('Não foi possível carregar imagens. Mostrando dados locais.')
          setLoading(false)
        }
      }
    }
    fetchCats()
    return ()=> mounted = false
  },[])

  if(loading) return <div className="container"><p>Carregando gatinhos...</p></div>
  return (
    <div className="container">
      <h2>Gatinhos disponíveis para adoção</h2>
      {error && <p style={{color:'crimson'}}>{error}</p>}
      <p>Imagens obtidas de <a href="https://thecatapi.com" target="_blank" rel="noreferrer">TheCatAPI</a>.</p>
      <div className="grid cols-3" style={{marginTop:18}}>
        {cats.length===0 ? <p>Nenhum gato encontrado.</p> : cats.map(cat => (
          <div className="adopt-detail-card" key={cat.id}>
            <img src={cat.img} alt={cat.name} />
            <div className="card-body">
              <h4>{cat.name}</h4>
              <p>{cat.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
