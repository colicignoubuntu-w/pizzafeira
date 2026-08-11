import {
  Check,
  Beer,
  MessageCircle,
  Users,
  Clock3,
} from 'lucide-react'

import { motion } from 'framer-motion'

import {
  plans,
  extraServices,
} from '../../data/plans'

import './Plans.css'

function createWhatsappUrl(planName) {
  const message = `Olá! Vim pelo site da Pizzafeira e gostaria de fazer um orçamento para o plano ${planName}.`

  return `https://wa.me/5511945280371?text=${encodeURIComponent(message)}`
}

function Plans() {
  return (
    <section
      className="plans-section"
      id="planos"
    >
      <div className="plans-section__container">
        <div className="plans-section__header">
          <div>
            <span className="section-label">
              Escolha sua experiência
            </span>

            <h2>
              Um rodízio feito para a sua festa.
            </h2>
          </div>

          <p>
            Você escolhe a opção que combina melhor com o seu evento
            e a Pizzafeira leva a estrutura até o local.
          </p>
        </div>

        <div className="plans-grid">
          {plans.map((plan, index) => (
            <motion.article
              className={`plan-card ${
                plan.featured
                  ? 'plan-card--featured'
                  : ''
              }`}
              key={plan.id}
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
                amount: 0.2,
              }}
              transition={{
                duration: 0.45,
                delay: index * 0.1,
              }}
            >
              {plan.badge && (
                <span className="plan-card__badge">
                  {plan.badge}
                </span>
              )}

              <div className="plan-card__header">
                <span className="plan-card__eyebrow">
                  Pizzafeira
                </span>

                <h3>
                  {plan.name}
                </h3>

                <p>
                  {plan.description}
                </p>
              </div>

              <div className="plan-card__price">
                <span className="plan-card__currency">
                  R$
                </span>

                <strong>
                  {plan.price}
                </strong>

                <span className="plan-card__suffix">
                  {plan.suffix}
                </span>
              </div>

              <div className="plan-card__divider" />

              <ul className="plan-card__features">
                {plan.items.map((item) => (
                  <li key={item}>
                    <span className="plan-card__check">
                      <Check
                        size={16}
                        strokeWidth={3}
                      />
                    </span>

                    {item}
                  </li>
                ))}
              </ul>

              <a
                href={createWhatsappUrl(plan.name)}
                target="_blank"
                rel="noreferrer"
                className="plan-card__button"
              >
                <MessageCircle size={19} />

                Quero este plano
              </a>
            </motion.article>
          ))}
        </div>

        <div className="plans-info">
          <div className="plans-info__item">
            <span className="plans-info__icon">
              <Users size={24} />
            </span>

            <div>
              <strong>
                Mínimo de 20 adultos
              </strong>

              <p>
                Consulte condições para eventos
                menores ou maiores.
              </p>
            </div>
          </div>

          <div className="plans-info__item">
            <span className="plans-info__icon">
              <Clock3 size={24} />
            </span>

            <div>
              <strong>
                Aproximadamente 3 horas
              </strong>

              <p>
                Tempo estimado do serviço de
                rodízio durante o evento.
              </p>
            </div>
          </div>
        </div>

        {extraServices.map((service) => (
          <motion.div
            className="extra-service"
            key={service.id}
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.45,
            }}
          >
            <div className="extra-service__icon">
              <Beer size={32} />
            </div>

            <div className="extra-service__content">
              <span>
                Serviço adicional
              </span>

              <h3>
                {service.name}
              </h3>

              <p>
                {service.description}
              </p>
            </div>

            <div className="extra-service__action">
              <strong>
                {service.priceLabel}
              </strong>

              <a
                href={createWhatsappUrl(service.name)}
                target="_blank"
                rel="noreferrer"
              >
                Consultar
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Plans