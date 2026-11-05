// Progetti: aggiorna descrizioni, stack e link man mano che li completi.
export const projects = [
  {
    title: 'Tripify',
    description:
      'Piattaforma di prenotazione viaggi (voli, hotel, attività) a microservizi: backend Spring Boot con 6 servizi (gateway, auth, catalogo, booking, chat, itinerari), autenticazione via Keycloak/OAuth2, e app Android nativa in Kotlin con Jetpack Compose.',
    stack: ['Spring Boot', 'Kotlin', 'Jetpack Compose', 'Docker', 'Keycloak', 'RabbitMQ', 'PostgreSQL'],
    type: 'Progetto di gruppo universitario',
    link: 'https://github.com/Matteoiazz/Enterprise-Project',
    linkLabel: 'Vedi su GitHub',
  },
  {
    title: 'MoneyMind',
    description:
      'Piattaforma web per la gestione delle finanze personali e degli investimenti, con backend Java e frontend sviluppato in TypeScript/HTML/CSS.',
    stack: ['Java', 'TypeScript', 'HTML/CSS'],
    type: 'Progetto di gruppo universitario',
    link: 'https://github.com/Matteoiazz/MoneyMind-WebApplication',
    linkLabel: 'Vedi su GitHub',
  },
  {
    title: 'La Bottega di Pino',
    description:
      'E-commerce full-stack per un negozio alimentare: catalogo prodotti per categoria (venduti a pezzo o a peso), carrello e checkout, autenticazione JWT con verifica email, area admin per gestire prodotti e ordini ricevuti, upload immagini su Cloudinary. Backend distribuito su Render.',
    stack: ['Angular', 'Tailwind CSS', 'Spring Boot', 'JWT', 'Cloudinary'],
    type: 'Progetto personale',
    link: null,
    linkLabel: 'Repository privata',
  },
]
