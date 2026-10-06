const poster = (path) => `https://image.tmdb.org/t/p/w500${path}`;
const backdrop = (path) => `https://image.tmdb.org/t/p/w1280${path}`;
const portrait = (path) => `https://images.unsplash.com/${path}?auto=format&fit=crop&w=400&q=80`;
const castMember = (name, character, profile) => ({ name, character, profile });

export const movies = [
  {
    id: 693134, title: 'Dune: Part Two', year: '2024', rating: 8.6, votes: '8.2k',
    genres: ['Sci-Fi', 'Adventure'], runtime: '2h 46m',
    poster: poster('/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg'), backdrop: backdrop('/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg'),
    overview: 'Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the universe, he must prevent a terrible future only he can foresee.',
    cast: [
      castMember('Timothée Chalamet', 'Paul Atreides', portrait('photo-1500648767791-00dcc994a43e')),
      castMember('Zendaya', 'Chani', portrait('photo-1494790108377-be9c29b29330')),
      castMember('Rebecca Ferguson', 'Lady Jessica', portrait('photo-1487412720507-e7ab37603c6f')),
      castMember('Javier Bardem', 'Stilgar', portrait('photo-1506794778202-cad84cf45f1d')),
      castMember('Austin Butler', 'Feyd-Rautha', portrait('photo-1504593811423-6dd665756598')),
      castMember('Florence Pugh', 'Princess Irulan', portrait('photo-1544005313-94ddf0286df2')),
    ],
  },
  {
    id: 872585, title: 'Oppenheimer', year: '2023', rating: 8.1, votes: '9.4k',
    genres: ['Drama', 'History'], runtime: '3h 00m',
    poster: poster('/ptpr0kGAckfQkJeJIt8st5dglvd.jpg'), backdrop: backdrop('/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg'),
    overview: 'The story of J. Robert Oppenheimer and his role in the development of the atomic bomb. A portrait of a brilliant scientist whose work changed the course of history forever.',
    cast: [
      castMember('Cillian Murphy', 'J. Robert Oppenheimer', portrait('photo-1504593811423-6dd665756598')),
      castMember('Emily Blunt', 'Katherine Oppenheimer', portrait('photo-1544005313-94ddf0286df2')),
      castMember('Matt Damon', 'Leslie Groves', portrait('photo-1500648767791-00dcc994a43e')),
      castMember('Robert Downey Jr.', 'Lewis Strauss', portrait('photo-1506794778202-cad84cf45f1d')),
      castMember('Florence Pugh', 'Jean Tatlock', portrait('photo-1494790108377-be9c29b29330')),
      castMember('Josh Hartnett', 'Ernest Lawrence', portrait('photo-1504257432389-52343af06ae3')),
    ],
  },
  {
    id: 666277, title: 'Past Lives', year: '2023', rating: 7.8, votes: '2.1k',
    genres: ['Romance', 'Drama'], runtime: '1h 46m',
    poster: poster('/k3waqVXSnvCZWfJYNtdamTgTtTA.jpg'), backdrop: backdrop('/yvp5qb8yDDjxBoC5O1E6n3B7s19.jpg'),
    overview: 'Two deeply connected childhood friends are wrested apart after one family emigrates from South Korea. Years later, they are reunited for one fateful week.',
    cast: [
      castMember('Greta Lee', 'Nora', portrait('photo-1487412720507-e7ab37603c6f')),
      castMember('Teo Yoo', 'Hae Sung', portrait('photo-1500648767791-00dcc994a43e')),
      castMember('John Magaro', 'Arthur', portrait('photo-1504257432389-52343af06ae3')),
      castMember('Moon Seung-ah', 'Young Nora', portrait('photo-1544005313-94ddf0286df2')),
      castMember('Leem Seung-min', 'Young Hae Sung', portrait('photo-1506794778202-cad84cf45f1d')),
      castMember('An Min-young', 'Mina', portrait('photo-1494790108377-be9c29b29330')),
    ],
  },
  {
    id: 792307, title: 'Poor Things', year: '2023', rating: 7.8, votes: '4.3k',
    genres: ['Science Fiction', 'Romance'], runtime: '2h 21m',
    poster: poster('/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg'), backdrop: backdrop('/bQS43HSLZzMjZkcHJz4fGc7fNdz.jpg'),
    overview: 'The incredible tale and fantastical evolution of Bella Baxter, a young woman brought back to life by the brilliant and unorthodox Dr. Godwin Baxter.',
    cast: [
      castMember('Emma Stone', 'Bella Baxter', portrait('photo-1487412720507-e7ab37603c6f')),
      castMember('Mark Ruffalo', 'Duncan', portrait('photo-1500648767791-00dcc994a43e')),
      castMember('Willem Dafoe', 'Dr. Godwin Baxter', portrait('photo-1506794778202-cad84cf45f1d')),
      castMember('Ramy Youssef', 'Max McCandles', portrait('photo-1504257432389-52343af06ae3')),
      castMember('Jerrod Carmichael', 'Harry Astley', portrait('photo-1494790108377-be9c29b29330')),
      castMember('Christopher Abbott', 'Felicity', portrait('photo-1544005313-94ddf0286df2')),
    ],
  },
  {
    id: 414906, title: 'The Batman', year: '2022', rating: 7.7, votes: '8.8k',
    genres: ['Crime', 'Thriller'], runtime: '2h 56m',
    poster: poster('/74xTEgt7R36Fpooo50r9T25onhq.jpg'), backdrop: backdrop('/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg'),
    overview: 'When a sadistic killer leaves a trail of clues, Batman is drawn into Gotham City’s darkest corners and must forge new relationships to unmask the culprit.',
    cast: [
      castMember('Robert Pattinson', 'Batman', portrait('photo-1504593811423-6dd665756598')),
      castMember('Zoë Kravitz', 'Catwoman', portrait('photo-1544005313-94ddf0286df2')),
      castMember('Paul Dano', 'Riddler', portrait('photo-1500648767791-00dcc994a43e')),
      castMember('Jeffrey Wright', 'Commissioner Gordon', portrait('photo-1506794778202-cad84cf45f1d')),
      castMember('Andy Serkis', 'Alfred', portrait('photo-1504257432389-52343af06ae3')),
      castMember('Colin Farrell', 'The Penguin', portrait('photo-1494790108377-be9c29b29330')),
    ],
  },
  {
    id: 569094, title: 'Spider-Man: Across the Spider-Verse', year: '2023', rating: 8.4, votes: '6.7k',
    genres: ['Animation', 'Action'], runtime: '2h 20m',
    poster: poster('/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg'), backdrop: backdrop('/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg'),
    overview: 'Miles Morales catapults across the multiverse, where he encounters a team of Spider-People charged with protecting its very existence.',
    cast: [
      castMember('Shameik Moore', 'Miles Morales', portrait('photo-1500648767791-00dcc994a43e')),
      castMember('Hailee Steinfeld', 'Gwen Stacy', portrait('photo-1494790108377-be9c29b29330')),
      castMember('Brian Tyree Henry', 'Jefferson Davis', portrait('photo-1506794778202-cad84cf45f1d')),
      castMember('Luna Lauren Vélez', 'Rio Morales', portrait('photo-1487412720507-e7ab37603c6f')),
      castMember('Jake Johnson', 'Peter B. Parker', portrait('photo-1504257432389-52343af06ae3')),
      castMember('Oscar Isaac', 'Spider-Man 2099', portrait('photo-1504593811423-6dd665756598')),
    ],
  },
  {
    id: 915935, title: 'Anatomy of a Fall', year: '2023', rating: 7.7, votes: '2.0k',
    genres: ['Thriller', 'Drama'], runtime: '2h 31m',
    poster: poster('/kQs6keheMwCxJxrzV83VUwFtHkB.jpg'), backdrop: backdrop('/a7nD2M4F2YukRB4cLZ2d5YIS8Y4.jpg'),
    overview: 'A woman is suspected of her husband’s murder, and their blind son faces a moral dilemma as the sole witness in their home.',
    cast: [
      castMember('Sandra Hüller', 'Sandra', portrait('photo-1487412720507-e7ab37603c6f')),
      castMember('Swann Arlaud', 'Vincent', portrait('photo-1500648767791-00dcc994a43e')),
      castMember('Milo Machado-Graner', 'Daniel', portrait('photo-1504257432389-52343af06ae3')),
      castMember('Antoine Reinartz', 'Antoine', portrait('photo-1506794778202-cad84cf45f1d')),
      castMember('Samuel Theis', 'Samuel', portrait('photo-1494790108377-be9c29b29330')),
      castMember('Jehnny Beth', 'Jehnny', portrait('photo-1544005313-94ddf0286df2')),
    ],
  },
  {
    id: 466420, title: 'Killers of the Flower Moon', year: '2023', rating: 7.5, votes: '3.2k',
    genres: ['Crime', 'History'], runtime: '3h 26m',
    poster: poster('/dB6Krk806zeqd0YNp2ngQ9zXteH.jpg'), backdrop: backdrop('/1X7vow16X7CnCoexXh4H4F2yDJv.jpg'),
    overview: 'Members of the Osage Nation are murdered under mysterious circumstances in the 1920s, sparking a major F.B.I. investigation.',
    cast: [
      castMember('Leonardo DiCaprio', 'Ernest Burkhart', portrait('photo-1504593811423-6dd665756598')),
      castMember('Lily Gladstone', 'Mollie Burkhart', portrait('photo-1544005313-94ddf0286df2')),
      castMember('Robert De Niro', 'William Hale', portrait('photo-1500648767791-00dcc994a43e')),
      castMember('Jesse Plemons', 'Tom White', portrait('photo-1504257432389-52343af06ae3')),
      castMember('John Lithgow', 'David M. Abbott', portrait('photo-1506794778202-cad84cf45f1d')),
      castMember('Brendan Fraser', 'W. H. "Hank"', portrait('photo-1494790108377-be9c29b29330')),
    ],
  },
  {
    id: 840430, title: 'The Holdovers', year: '2023', rating: 8.0, votes: '2.6k',
    genres: ['Comedy', 'Drama'], runtime: '2h 13m',
    poster: poster('/VHSzNBTwxV8vh7wylo7O9CLdac.jpg'), backdrop: backdrop('/5KS7Tz2jPAJPMh8W7jM7fNzYQzY.jpg'),
    overview: 'A curmudgeonly instructor remains on campus during Christmas break to look after a handful of students with nowhere to go.',
    cast: [
      castMember('Paul Giamatti', 'Paul Hunham', portrait('photo-1500648767791-00dcc994a43e')),
      castMember('Da’Vine Joy Randolph', 'Mary Lamb', portrait('photo-1487412720507-e7ab37603c6f')),
      castMember('Dominic Sessa', 'Angus Tully', portrait('photo-1504257432389-52343af06ae3')),
      castMember('Carrie Preston', 'Mrs. Tully', portrait('photo-1544005313-94ddf0286df2')),
      castMember('Brady Hepner', 'Alec', portrait('photo-1506794778202-cad84cf45f1d')),
      castMember('Gillian Vigman', 'Nancy', portrait('photo-1494790108377-be9c29b29330')),
    ],
  },
  {
    id: 933260, title: 'The Substance', year: '2024', rating: 7.3, votes: '4.1k',
    genres: ['Horror', 'Sci-Fi'], runtime: '2h 21m',
    poster: poster('/lqoMzCcZYEFK729d6qzt349fB4o.jpg'), backdrop: backdrop('/bVSOgrxasVJF6V71T7v2KfBRSzu.jpg'),
    overview: 'A fading celebrity decides to use a black market drug, a cell-replicating substance that temporarily creates a younger, better version of herself.',
    cast: [
      castMember('Demi Moore', 'Elisabeth Sparkle', portrait('photo-1494790108377-be9c29b29330')),
      castMember('Margaret Qualley', 'Sue', portrait('photo-1487412720507-e7ab37603c6f')),
      castMember('Dennis Quaid', 'Harvey', portrait('photo-1500648767791-00dcc994a43e')),
      castMember('Edward Hamilton-Clark', 'Guy', portrait('photo-1504257432389-52343af06ae3')),
      castMember('Gore Abrams', 'The Producer', portrait('photo-1506794778202-cad84cf45f1d')),
      castMember('Oscar Lesage', 'The Young Man', portrait('photo-1544005313-94ddf0286df2')),
    ],
  },
  {
    id: 120467, title: 'The Grand Budapest Hotel', year: '2014', rating: 8.1, votes: '8.0k',
    genres: ['Comedy', 'Adventure'], runtime: '1h 40m',
    poster: poster('/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg'), backdrop: backdrop('/nX5XotM9yprCKarRH4fzOq1VM1J.jpg'),
    overview: 'A legendary concierge and his young protégé become embroiled in the theft of a priceless Renaissance painting and a family fortune.',
    cast: [
      castMember('Ralph Fiennes', 'Gustave H.', portrait('photo-1500648767791-00dcc994a43e')),
      castMember('Tony Revolori', 'Zero Moustafa', portrait('photo-1504257432389-52343af06ae3')),
      castMember('Saoirse Ronan', 'Agatha', portrait('photo-1494790108377-be9c29b29330')),
      castMember('Adrien Brody', 'Dmitri', portrait('photo-1506794778202-cad84cf45f1d')),
      castMember('Willem Dafoe', 'J.G. Jopling', portrait('photo-1504593811423-6dd665756598')),
      castMember('Tilda Swinton', 'Madame D.', portrait('photo-1487412720507-e7ab37603c6f')),
    ],
  },
  {
    id: 559907, title: 'The Green Knight', year: '2021', rating: 6.6, votes: '2.7k',
    genres: ['Fantasy', 'Adventure'], runtime: '2h 10m',
    poster: poster('/if4hw3Ou5Sav9Em7WWHj66mnywp.jpg'), backdrop: backdrop('/oIfNqYPURpu7kUjA5S17aIQXj4j.jpg'),
    overview: 'An epic fantasy adventure based on the timeless Arthurian legend, following King Arthur’s reckless nephew on a daring quest.',
    cast: [
      castMember('Dev Patel', 'Gawain', portrait('photo-1504593811423-6dd665756598')),
      castMember('Alicia Vikander', 'Essel', portrait('photo-1544005313-94ddf0286df2')),
      castMember('Joel Edgerton', 'The Green Knight', portrait('photo-1500648767791-00dcc994a43e')),
      castMember('Sarita Choudhury', 'The Queen', portrait('photo-1494790108377-be9c29b29330')),
      castMember('Sean Harris', 'King Arthur', portrait('photo-1506794778202-cad84cf45f1d')),
      castMember('Kate Dickie', 'The Witch', portrait('photo-1487412720507-e7ab37603c6f')),
    ],
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