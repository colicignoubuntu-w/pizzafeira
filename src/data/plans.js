export const plans = [
  {
    id: 'tradicional',
    name: 'Rodízio Tradicional',
    price: 50,
    suffix: 'por pessoa',
    featured: false,
    description:
      'Uma experiência completa de rodízio com pizzas salgadas e doces preparadas no local.',
    items: [
      'Pizzas salgadas',
      'Pizzas doces',
      'Produção no local',
      'Rodízio durante o evento',
      'Atendimento aos convidados',
    ],
  },
  {
    id: 'com-bebidas',
    name: 'Rodízio com Bebidas',
    price: 80,
    suffix: 'por pessoa',
    featured: true,
    badge: 'Mais completo',
    description:
      'Além do rodízio completo, o evento conta com bebidas para os convidados.',
    items: [
      'Pizzas salgadas',
      'Pizzas doces',
      'Água',
      'Suco',
      'Refrigerante',
      'Produção no local',
      'Garçom servindo os convidados',
    ],
  },
]

export const extraServices = [
  {
    id: 'chopp',
    name: 'Chopp para eventos',
    description:
      'Consulte disponibilidade e valores para incluir chopp no seu evento.',
    priceLabel: 'Sob consulta',
  },
]