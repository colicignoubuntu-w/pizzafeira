import { Camera, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

import './Gallery.css'

const galleryItems = [
  {
    src: '/images/evento-1.jpg',
    alt: 'Equipe da Pizzafeira durante a preparação das pizzas',
    className: 'gallery-item--large',
  },
  {
    src: '/images/evento-2.jpg',
    alt: 'Equipe da Pizzafeira com pizzas preparadas para o evento',
    className: 'gallery-item--vertical',
  },
  {
    src: '/images/evento-3.jpg',
    alt: 'Diversos sabores de pizzas preparados pela Pizzafeira',
    className: 'gallery-item--vertical',
  },
  {
    src: '/images/evento-4.jpg',
    alt: 'Pizzas servidas aos convidados em um evento da Pizzafeira',
    className: 'gallery-item--wide',
  },
]

function Gallery() {
  return (
    <section
      className="gallery-section"
      id="galeria"
    >
      <div className="gallery-section__container">
        <div className="gallery-section__header">
          <div>
            <span className="section-label">
              Experiência Pizzafeira
            </span>

            <h2>
              Pizza feita de verdade, no seu evento.
            </h2>
          </div>

          <p>
            Da preparação ao momento de servir, a equipe da Pizzafeira
            leva toda a experiência do rodízio até seus convidados.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <motion.figure
              key={item.src}
              className={`gallery-item ${item.className}`}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
              />

              <div className="gallery-item__overlay">
                <Camera size={23} />

                <span>
                  Pizzafeira
                </span>
              </div>
            </motion.figure>
          ))}
        </div>

        <div className="gallery-bottom">
          <div>
            <span className="gallery-bottom__eyebrow">
              Quer viver essa experiência?
            </span>

            <h3>
              Leve a Pizzafeira para a sua festa.
            </h3>

            <p>
              Conte a data, o local e a quantidade de convidados.
              A gente prepara o orçamento para o seu evento.
            </p>
          </div>

          <a
            href="https://wa.me/5511945280371?text=Olá!%20Vi%20as%20fotos%20no%20site%20da%20Pizzafeira%20e%20gostaria%20de%20fazer%20um%20orçamento%20para%20meu%20evento."
            target="_blank"
            rel="noreferrer"
            className="gallery-bottom__button"
          >
            <MessageCircle size={20} />
            Pedir orçamento
          </a>
        </div>
      </div>
    </section>
  )
}

export default Gallery