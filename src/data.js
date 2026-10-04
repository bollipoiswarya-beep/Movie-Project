const poster = (path) => `https://image.tmdb.org/t/p/w500${path}`;
const backdrop = (path) => `https://image.tmdb.org/t/p/w1280${path}`;

export const movies = [
  {
    id: 693134, title: 'Dune: Part Two', year: '2024', rating: 8.6, votes: '8.2k',
    genres: ['Sci-Fi', 'Adventure'], runtime: '2h 46m',
    poster: poster('/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg'), backdrop: backdrop('/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg'),
    overview: 'Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the universe, he must prevent a terrible future only he can foresee.',
    cast: ['Timothée Chalamet', 'Zendaya', 'Rebecca Ferguson', 'Javier Bardem', 'Austin Butler', 'Florence Pugh'],
  },
  {
    id: 872585, title: 'Oppenheimer', year: '2023', rating: 8.1, votes: '9.4k',
    genres: ['Drama', 'History'], runtime: '3h 00m',
    poster: poster('/ptpr0kGAckfQkJeJIt8st5dglvd.jpg'), backdrop: backdrop('/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg'),
    overview: 'The story of J. Robert Oppenheimer and his role in the development of the atomic bomb. A portrait of a brilliant scientist whose work changed the course of history forever.',
    cast: ['Cillian Murphy', 'Emily Blunt', 'Matt Damon', 'Robert Downey Jr.', 'Florence Pugh', 'Josh Hartnett'],
  },
  {
    id: 666277, title: 'Past Lives', year: '2023', rating: 7.8, votes: '2.1k',
    genres: ['Romance', 'Drama'], runtime: '1h 46m',
    poster: poster('/k3waqVXSnvCZWfJYNtdamTgTtTA.jpg'), backdrop: backdrop('/yvp5qb8yDDjxBoC5O1E6n3B7s19.jpg'),
    overview: 'Two deeply connected childhood friends are wrested apart after one family emigrates from South Korea. Years later, they are reunited for one fateful week.',
    cast: ['Greta Lee', 'Teo Yoo', 'John Magaro', 'Moon Seung-ah', 'Leem Seung-min', 'An Min-young'],
  },
  {
    id: 792307, title: 'Poor Things', year: '2023', rating: 7.8, votes: '4.3k',
    genres: ['Science Fiction', 'Romance'], runtime: '2h 21m',
    poster: poster('/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg'), backdrop: backdrop('/bQS43HSLZzMjZkcHJz4fGc7fNdz.jpg'),
    overview: 'The incredible tale and fantastical evolution of Bella Baxter, a young woman brought back to life by the brilliant and unorthodox Dr. Godwin Baxter.',
    cast: ['Emma Stone', 'Mark Ruffalo', 'Willem Dafoe', 'Ramy Youssef', 'Jerrod Carmichael', 'Christopher Abbott'],
  },
  {
    id: 414906, title: 'The Batman', year: '2022', rating: 7.7, votes: '8.8k',
    genres: ['Crime', 'Thriller'], runtime: '2h 56m',
    poster: poster('/74xTEgt7R36Fpooo50r9T25onhq.jpg'), backdrop: backdrop('/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg'),
    overview: 'When a sadistic killer leaves a trail of clues, Batman is drawn into Gotham City’s darkest corners and must forge new relationships to unmask the culprit.',
    cast: ['Robert Pattinson', 'Zoë Kravitz', 'Paul Dano', 'Jeffrey Wright', 'Andy Serkis', 'Colin Farrell'],
  },
  {
    id: 569094, title: 'Spider-Man: Across the Spider-Verse', year: '2023', rating: 8.4, votes: '6.7k',
    genres: ['Animation', 'Action'], runtime: '2h 20m',
    poster: poster('/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg'), backdrop: backdrop('/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg'),
    overview: 'Miles Morales catapults across the multiverse, where he encounters a team of Spider-People charged with protecting its very existence.',
    cast: ['Shameik Moore', 'Hailee Steinfeld', 'Brian Tyree Henry', 'Luna Lauren Vélez', 'Jake Johnson', 'Oscar Isaac'],
  },
  {
    id: 915935, title: 'Anatomy of a Fall', year: '2023', rating: 7.7, votes: '2.0k',
    genres: ['Thriller', 'Drama'], runtime: '2h 31m',
    poster: poster('/kQs6keheMwCxJxrzV83VUwFtHkB.jpg'), backdrop: backdrop('/a7nD2M4F2YukRB4cLZ2d5YIS8Y4.jpg'),
    overview: 'A woman is suspected of her husband’s murder, and their blind son faces a moral dilemma as the sole witness in their home.',
    cast: ['Sandra Hüller', 'Swann Arlaud', 'Milo Machado-Graner', 'Antoine Reinartz', 'Samuel Theis', 'Jehnny Beth'],
  },
  {
    id: 466420, title: 'Killers of the Flower Moon', year: '2023', rating: 7.5, votes: '3.2k',
    genres: ['Crime', 'History'], runtime: '3h 26m',
    poster: poster('/dB6Krk806zeqd0YNp2ngQ9zXteH.jpg'), backdrop: backdrop('/1X7vow16X7CnCoexXh4H4F2yDJv.jpg'),
    overview: 'Members of the Osage Nation are murdered under mysterious circumstances in the 1920s, sparking a major F.B.I. investigation.',
    cast: ['Leonardo DiCaprio', 'Lily Gladstone', 'Robert De Niro', 'Jesse Plemons', 'John Lithgow', 'Brendan Fraser'],
  },
  {
    id: 840430, title: 'The Holdovers', year: '2023', rating: 8.0, votes: '2.6k',
    genres: ['Comedy', 'Drama'], runtime: '2h 13m',
    poster: poster('/VHSzNBTwxV8vh7wylo7O9CLdac.jpg'), backdrop: backdrop('/5KS7Tz2jPAJPMh8W7jM7fNzYQzY.jpg'),
    overview: 'A curmudgeonly instructor remains on campus during Christmas break to look after a handful of students with nowhere to go.',
    cast: ['Paul Giamatti', 'Da’Vine Joy Randolph', 'Dominic Sessa', 'Carrie Preston', 'Brady Hepner', 'Gillian Vigman'],
  },
  {
    id: 933260, title: 'The Substance', year: '2024', rating: 7.3, votes: '4.1k',
    genres: ['Horror', 'Sci-Fi'], runtime: '2h 21m',
    poster: poster('/lqoMzCcZYEFK729d6qzt349fB4o.jpg'), backdrop: backdrop('/bVSOgrxasVJF6V71T7v2KfBRSzu.jpg'),
    overview: 'A fading celebrity decides to use a black market drug, a cell-replicating substance that temporarily creates a younger, better version of herself.',
    cast: ['Demi Moore', 'Margaret Qualley', 'Dennis Quaid', 'Edward Hamilton-Clark', 'Gore Abrams', 'Oscar Lesage'],
  },
  {
    id: 120467, title: 'The Grand Budapest Hotel', year: '2014', rating: 8.1, votes: '8.0k',
    genres: ['Comedy', 'Adventure'], runtime: '1h 40m',
    poster: poster('/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg'), backdrop: backdrop('/nX5XotM9yprCKarRH4fzOq1VM1J.jpg'),
    overview: 'A legendary concierge and his young protégé become embroiled in the theft of a priceless Renaissance painting and a family fortune.',
    cast: ['Ralph Fiennes', 'Tony Revolori', 'Saoirse Ronan', 'Adrien Brody', 'Willem Dafoe', 'Tilda Swinton'],
  },
  {
    id: 559907, title: 'The Green Knight', year: '2021', rating: 6.6, votes: '2.7k',
    genres: ['Fantasy', 'Adventure'], runtime: '2h 10m',
    poster: poster('/if4hw3Ou5Sav9Em7WWHj66mnywp.jpg'), backdrop: backdrop('/oIfNqYPURpu7kUjA5S17aIQXj4j.jpg'),
    overview: 'An epic fantasy adventure based on the timeless Arthurian legend, following King Arthur’s reckless nephew on a daring quest.',
    cast: ['Dev Patel', 'Alicia Vikander', 'Joel Edgerton', 'Sarita Choudhury', 'Sean Harris', 'Kate Dickie'],
  },
];

export const categoryOrder = {
  popular: [movies[0], movies[1], movies[2], movies[3], movies[4], movies[5], movies[7], movies[8], movies[6], movies[9], movies[10], movies[11]],
  top_rated: [movies[0], movies[5], movies[1], movies[10], movies[8], movies[2], movies[3], movies[4], movies[7], movies[6], movies[11], movies[9]],
  upcoming: [movies[9], movies[0], movies[3], movies[5], movies[6], movies[2], movies[7], movies[8], movies[1], movies[4], movies[10], movies[11]],
};

export const posterUrl = (path, size = 'w500') =>
  path?.startsWith('http') ? path : `https://image.tmdb.org/t/p/${size}${path || ''}`;

export const backdropUrl = (path) =>
  path?.startsWith('http') ? path : `https://image.tmdb.org/t/p/w1280${path || ''}`;