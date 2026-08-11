import { useState } from 'react'
import {
  Menu,
  X,
  MessageCircle,
} from 'lucide-react'

import './Header.css'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  const whatsappUrl =
    'https://wa.me/5511945280371?text=Olá!%20Vim%20pelo%20site%20da%20Pizzafeira%20e%20gostaria%20de%20fazer%20um%20orçamento.'

  return (
    <header className="header">
      <div className="header__container">

        <a
          href="#inicio"
          className="header__logo"
          onClick={closeMenu}
          aria-label="Pizzafeira - Início"
        >
          <img
            src="/images/logo-pizzafeira.png"
            alt="Logo Pizzafeira"
          />

          <div className="header__brand">
            <strong>Pizzafeira</strong>
            <span>Pizza artesanal</span>
          </div>
        </a>

        <nav
          className={
            menuOpen
              ? 'header__nav header__nav--open'
              : 'header__nav'
          }
        >
          <a href="#inicio" onClick={closeMenu}>
            Início
          </a>

          <a href="#como-funciona" onClick={closeMenu}>
            Como funciona
          </a>

          <a href="#cardapio" onClick={closeMenu}>
            Cardápio
          </a>

          <a href="#planos" onClick={closeMenu}>
            Planos
          </a>

          <a href="#eventos" onClick={closeMenu}>
            Eventos
          </a>

          <a href="#galeria" onClick={closeMenu}>
            Galeria
          </a>

          <a href="#faq" onClick={closeMenu}>
            Dúvidas
          </a>

          <a
            className="header__nav-whatsapp"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            <MessageCircle size={18} />
            Pedir orçamento
          </a>
        </nav>

        <div className="header__actions">
          <a
            className="header__whatsapp"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={18} />
            Orçamento
          </a>

          <button
            className="header__menu-button"
            type="button"
            aria-label={
              menuOpen
                ? 'Fechar menu'
                : 'Abrir menu'
            }
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X size={26} />
            ) : (
              <Menu size={26} />
            )}
          </button>
        </div>

      </div>
    </header>
  )
}

export default Header