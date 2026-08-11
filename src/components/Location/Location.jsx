import {
  MapPin,
  ExternalLink,
  Store,
} from 'lucide-react'

import { motion } from 'framer-motion'

import './Location.css'

function Location() {
  const mapsUrl =
    'https://www.google.com/maps/search/?api=1&query=Parque+de+Exposicoes+Dr+Fernando+Costa+Posto+de+Monta+Braganca+Paulista+SP'

  return (
    <section
      className="location-section"
      id="onde-estamos"
    >
      <div className="location-section__container">

        <div className="location-section__heading">
          <span>
            Você também encontra a gente por lá
          </span>

          <h2>
            Pizzafeira no Posto de Monta
          </h2>

          <p>
            Além dos eventos particulares, a Pizzafeira também
            trabalha no Parque de Exposições Dr. Fernando Costa,
            conhecido como Posto de Monta, em Bragança Paulista.
          </p>
        </div>

        <motion.div
          className="location-card"
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
          }}
        >

          <div className="location-card__info">

            <div className="location-card__logo">
              <img
                src="/images/logo-pizzafeira.png"
                alt="Pizzafeira"
              />
            </div>

            <span className="location-card__label">
              Onde encontrar a Pizzafeira
            </span>

            <h3>
              Posto de Monta
            </h3>

            <p className="location-card__city">
              Bragança Paulista — SP
            </p>

            <p className="location-card__description">
              Você também pode encontrar a Pizzafeira no
              Parque de Exposições Dr. Fernando Costa.
              Passe por lá e venha experimentar nossas
              pizzas artesanais.
            </p>

            <div className="location-card__details">

              <div className="location-detail">
                <span className="location-detail__icon">
                  <MapPin size={21} />
                </span>

                <div>
                  <strong>
                    Parque de Exposições Dr. Fernando Costa
                  </strong>

                  <span>
                    Posto de Monta
                  </span>
                </div>
              </div>

              <div className="location-detail">
                <span className="location-detail__icon">
                  <Store size={21} />
                </span>

                <div>
                  <strong>
                    Pizzafeira
                  </strong>

                  <span>
                    Bragança Paulista - SP
                  </span>
                </div>
              </div>

            </div>

            <a
              className="location-card__button"
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
            >
              <MapPin size={19} />

              Abrir no Google Maps

              <ExternalLink size={16} />
            </a>

          </div>

          <div className="location-card__map">
            <iframe
              title="Parque de Exposições Dr. Fernando Costa - Posto de Monta"
              src="https://www.google.com/maps?q=Parque+de+Exposicoes+Dr+Fernando+Costa+Posto+de+Monta+Braganca+Paulista+SP&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

        </motion.div>

      </div>
    </section>
  )
}

export default Location