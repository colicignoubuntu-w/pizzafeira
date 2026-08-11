import { ArrowDown, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

import './Hero.css'

function Hero() {
  const whatsappUrl =
    'https://wa.me/5511945280371?text=Olá!%20Vim%20pelo%20site%20da%20Pizzafeira%20e%20gostaria%20de%20fazer%20um%20orçamento.'

  return (
    <section
      className="hero"
      id="inicio"
    >
      <div className="hero__overlay" />

      <div className="hero__content">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <span className="hero__badge">
            Rodízio de pizza no seu evento
          </span>

          <h1>
            A Pizzafeira
            <span>
              vai até você.
            </span>
          </h1>

          <p>
            Levamos toda a experiência de um rodízio de pizza
            até a sua festa. Pizzas preparadas no local,
            sabores salgados e doces e atendimento para
            seus convidados.
          </p>

          <div className="hero__actions">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="hero__button hero__button--primary"
            >
              <MessageCircle size={20} />

              Pedir orçamento
            </a>

            <a
              href="#como-funciona"
              className="hero__button hero__button--secondary"
            >
              Como funciona
            </a>
          </div>

          <div className="hero__info">
            <div>
              <strong>
                Pizza na hora
              </strong>

              <span>
                Preparada no evento
              </span>
            </div>

            <div>
              <strong>
                Rodízio completo
              </strong>

              <span>
                Salgadas e doces
              </span>
            </div>

            <div>
              <strong>
                Serviço no local
              </strong>

              <span>
                Para seus convidados
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#como-funciona"
        className="hero__scroll"
        aria-label="Ir para a próxima seção"
      >
        <ArrowDown size={22} />
      </a>
    </section>
  )
}

export default Hero