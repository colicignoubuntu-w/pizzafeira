import {
  CakeSlice,
  BriefcaseBusiness,
  House,
  Heart,
  Users,
  PartyPopper,
} from 'lucide-react'

import { motion } from 'framer-motion'

import './Events.css'

const events = [
  {
    icon: CakeSlice,
    title: 'Aniversários',
    description:
      'Transforme o aniversário em uma experiência diferente, com pizza feita na hora para todos os convidados.',
  },
  {
    icon: House,
    title: 'Festas em casa',
    description:
      'A Pizzafeira leva a estrutura até sua casa para você aproveitar o evento sem se preocupar com a cozinha.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Confraternizações',
    description:
      'Uma opção prática e descontraída para reuniões de equipe, empresas e celebrações profissionais.',
  },
  {
    icon: Heart,
    title: 'Comemorações especiais',
    description:
      'Noivados, bodas, encontros de família e outras ocasiões que merecem uma experiência especial.',
  },
  {
    icon: Users,
    title: 'Encontros de família',
    description:
      'Um rodízio completo para reunir família e amigos ao redor de pizzas fresquinhas.',
  },
  {
    icon: PartyPopper,
    title: 'Eventos personalizados',
    description:
      'Tem uma ideia diferente? Fale com a Pizzafeira e veja como podemos adaptar o serviço ao seu evento.',
  },
]

function Events() {
  return (
    <section className="events-section" id="eventos">
      <div className="events-section__container">
        <div className="events-section__header">
          <div>
            <span className="section-label">
              Para todos os momentos
            </span>

            <h2>
              Sua festa fica ainda melhor com pizza.
            </h2>
          </div>

          <p>
            A Pizzafeira se adapta a diferentes tipos de evento.
            Você escolhe o local, reúne seus convidados e nós levamos
            a experiência até você.
          </p>
        </div>

        <div className="events-grid">
          {events.map((event, index) => {
            const Icon = event.icon

            return (
              <motion.article
                className="event-card"
                key={event.title}
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
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                }}
              >
                <span className="event-card__icon">
                  <Icon size={28} />
                </span>

                <h3>
                  {event.title}
                </h3>

                <p>
                  {event.description}
                </p>
              </motion.article>
            )
          })}
        </div>

        <div className="events-cta">
          <div>
            <span>
              Vai fazer uma festa?
            </span>

            <h3>
              Conte para a gente como será o seu evento.
            </h3>
          </div>

          <a
            href="https://wa.me/5511945280371?text=Olá!%20Vim%20pelo%20site%20da%20Pizzafeira%20e%20quero%20contar%20sobre%20meu%20evento."
            target="_blank"
            rel="noreferrer"
          >
            Falar com a Pizzafeira
          </a>
        </div>
      </div>
    </section>
  )
}

export default Events