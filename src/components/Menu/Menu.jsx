import { Pizza, IceCreamBowl } from 'lucide-react'
import { motion } from 'framer-motion'
import { savoryPizzas, sweetPizzas } from '../../data/menu'
import './Menu.css'

function PizzaCard({ pizza, index }) {
  return (
    <motion.article
      className="menu-card"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.35,
        delay: Math.min(index * 0.04, 0.3),
      }}
    >
      <div className="menu-card__top">
        <span className="menu-card__number">
          {String(index + 1).padStart(2, '0')}
        </span>

        <Pizza size={22} />
      </div>

      <h3>{pizza.name}</h3>

      <p>{pizza.description}</p>
    </motion.article>
  )
}

function Menu() {
  return (
    <section className="menu-section" id="cardapio">
      <div className="menu-section__container">
        <div className="menu-section__header">
          <div>
            <span className="section-label">
              Nosso cardápio
            </span>

            <h2>
              Tem pizza para todo mundo.
            </h2>
          </div>

          <p>
            Uma seleção de sabores para deixar o rodízio variado do
            começo ao fim. E quando chegar a sobremesa, ainda tem pizza.
          </p>
        </div>

        <div className="menu-category">
          <div className="menu-category__title">
            <span className="menu-category__icon">
              <Pizza size={24} />
            </span>

            <div>
              <span>Rodízio</span>
              <h3>Pizzas salgadas</h3>
            </div>
          </div>

          <div className="menu-grid">
            {savoryPizzas.map((pizza, index) => (
              <PizzaCard
                key={pizza.name}
                pizza={pizza}
                index={index}
              />
            ))}
          </div>
        </div>

        <div className="menu-category menu-category--sweet">
          <div className="menu-category__title">
            <span className="menu-category__icon">
              <IceCreamBowl size={24} />
            </span>

            <div>
              <span>Para finalizar</span>
              <h3>Pizzas doces</h3>
            </div>
          </div>

          <div className="menu-grid">
            {sweetPizzas.map((pizza, index) => (
              <PizzaCard
                key={pizza.name}
                pizza={pizza}
                index={index}
              />
            ))}
          </div>
        </div>

        <div className="menu-section__note">
          <strong>Quer montar seu evento?</strong>

          <p>
            Entre em contato com a Pizzafeira para consultar sabores,
            disponibilidade e opções para sua festa.
          </p>

          <a
            href="https://wa.me/5511945280371?text=Olá!%20Vim%20pelo%20site%20da%20Pizzafeira%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20cardápio."
            target="_blank"
            rel="noreferrer"
          >
            Falar sobre o cardápio
          </a>
        </div>
      </div>
    </section>
  )
}

export default Menu