import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './header.css'
import CatLogo from '../assets/cat-illustration.svg'

export default function Header(){
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          <Link to="/"><img src={CatLogo} alt="gato" className="brand-img"/></Link>
          <div>
            <h1 className="brand-title"><Link to="/">Gatinhos</Link></h1>
            <small className="brand-sub">Adoção com amor 💚💗</small>
          </div>
        </div>

        <nav className="nav">
          <NavLink to="/" end className={({isActive})=>isActive?'active':''}>Home</NavLink>
          <NavLink to="/adopt" className={({isActive})=>isActive?'active':''}>Adote</NavLink>
          <NavLink to="/store" className={({isActive})=>isActive?'active':''}>Loja</NavLink>
          <NavLink to="/about" className={({isActive})=>isActive?'active':''}>Sobre</NavLink>
          <NavLink to="/contact" className={({isActive})=>isActive?'active':''}>Contato</NavLink>
        </nav>
      </div>
    </header>
  )
}
