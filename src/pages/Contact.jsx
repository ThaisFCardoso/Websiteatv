import React, { useRef, useState } from 'react'
export default function Contact(){
  const nomeRef = useRef(null)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [mensagem, setMensagem] = useState('')

  function handleSubmit(e){
    e.preventDefault()
    if(!nome.trim()||!email.trim()||!mensagem.trim()){
      alert('Por favor complete todos os campos.')
      return
    }
    alert('Mensagem enviada. Obrigado!')
    setNome(''); setEmail(''); setMensagem('')
    if(nomeRef.current) nomeRef.current.focus()
  }

  return (
    <div className="container">
      <h2>Contato</h2>
      <p>Envie sua mensagem e responderemos em breve.</p>
      <form onSubmit={handleSubmit} style={{maxWidth:600, marginTop:18}}>
        <label style={{display:'block', marginBottom:8}}>Nome
          <input ref={nomeRef} value={nome} onChange={e=>setNome(e.target.value)} style={{width:'100%', padding:10, borderRadius:8, border:'1px solid rgba(0,0,0,0.08)'}} />
        </label>
        <label style={{display:'block', marginBottom:8}}>Email
          <input value={email} onChange={e=>setEmail(e.target.value)} style={{width:'100%', padding:10, borderRadius:8, border:'1px solid rgba(0,0,0,0.08)'}} />
        </label>
        <label style={{display:'block', marginBottom:8}}>Mensagem
          <textarea value={mensagem} onChange={e=>setMensagem(e.target.value)} style={{width:'100%', padding:10, borderRadius:8, border:'1px solid rgba(0,0,0,0.08)'}} rows="6" />
        </label>
        <button type="submit" style={{background:'var(--verde-escuro)', color:'white', padding:'10px 14px', borderRadius:10, border:'none', fontWeight:700}}>Enviar</button>
      </form>
    </div>
  )
}
