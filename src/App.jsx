import './App.css'

import { MessageCircle } from 'lucide-react'

import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Menu from './components/Menu/Menu'
import Plans from './components/Plans/Plans'
import Events from './components/Events/Events'
import Gallery from './components/Gallery/Gallery'

function App() {
  const whatsappUrl =
    'https://wa.me/5511945280371?text=Olá!%20Vim%20pelo%20site%20da%20Pizzafeira%20e%20gostaria%20de%20fazer%20um%20orçamento.'

  return (
    <div className="app">
      <Header />

      <main>
        <Hero />

        <section
          className="intro"
          id="como-funciona"
        >
          <div className="container">
            <span className="section-label">
              Uma pizzaria no seu evento
            </span>

            <h2>
              Nós levamos a experiência completa até você
            </h2>

            <p className="intro__description">
              A equipe da Pizzafeira prepara as pizzas no local
              e serve seus convidados durante o evento.
              Você aproveita a festa enquanto cuidamos das pizzas.
            </p>

            <div className="intro__grid">
              <article className="intro-card">
                <span className="intro-card__icon">
                  🔥
                </span>

                <h3>
                  Produção no local
                </h3>

                <p>
                  As pizzas são preparadas e assadas
                  durante o seu evento.
                </p>
              </article>

              <article className="intro-card">
                <span className="intro-card__icon">
                  🍕
                </span>

                <h3>
                  Pizza à vontade
                </h3>

                <p>
                  Seus convidados aproveitam os sabores
                  salgados e doces.
                </p>
              </article>

              <article className="intro-card">
                <span className="intro-card__icon">
                  👨‍🍳
                </span>

                <h3>
                  Serviço completo
                </h3>

                <p>
                  Garçom servindo os convidados durante
                  o rodízio.
                </p>
              </article>

              <article className="intro-card">
                <span className="intro-card__icon">
                  🎉
                </span>

                <h3>
                  Para vários eventos
                </h3>

                <p>
                  Aniversários, confraternizações,
                  festas e encontros especiais.
                </p>
              </article>
            </div>
          </div>
        </section>

        <Menu />

        <Plans />

        <Events />

        <Gallery />
      </main>

      <a
        className="mascot-whatsapp"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar com a Pizzafeira no WhatsApp"
      >
        <div className="mascot-whatsapp__bubble">
          <strong>
            Vai fazer uma festa?
          </strong>

          <span>
            Chama a Pizzafeira 🍕
          </span>
        </div>

        <div className="mascot-whatsapp__character">
          <img
            src="/images/logo-pizzafeira.png"
            alt="Mascote da Pizzafeira"
          />

          <span className="mascot-whatsapp__icon">
            <MessageCircle size={27} strokeWidth={2.5} />
          </span>
        </div>
      </a>
    </div>
  )
}

export default App