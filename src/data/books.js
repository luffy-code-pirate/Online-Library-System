// ─── DUMMY BOOK DATA ─────────────────────────────────────────────────────────
// Uses Open Library API for real book cover images.
// Cover URL format: https://covers.openlibrary.org/b/id/COVER_ID-L.jpg

export const initialBooks = [
  {
    id: 1,
    title: "Dune",
    author: "Frank Herbert",
    category: "Sci-Fi",
    description:
      "Set in the distant future, Dune follows Paul Atreides as his family takes stewardship of the desert planet Arrakis — the only source of the most valuable substance in the universe.",
    rating: 4.8,
    cover: "#c0392b",
    coverImg: "https://covers.openlibrary.org/b/id/8231992-L.jpg",
  },
  {
    id: 2,
    title: "Foundation",
    author: "Isaac Asimov",
    category: "Sci-Fi",
    description:
      "Hari Seldon predicts the fall of the Galactic Empire and establishes the Foundation to shorten the dark age that will follow. A landmark of science fiction.",
    rating: 4.7,
    cover: "#2980b9",
    coverImg: "https://covers.openlibrary.org/b/id/8397282-L.jpg",
  },
  {
    id: 3,
    title: "Neuromancer",
    author: "William Gibson",
    category: "Sci-Fi",
    description:
      "Case, a washed-up computer hacker, is hired by a mysterious employer to pull off the ultimate hack. The novel that defined cyberpunk.",
    rating: 4.5,
    cover: "#27ae60",
    coverImg: "https://covers.openlibrary.org/b/id/796549-L.jpg",
  },
  {
    id: 4,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    category: "Fiction",
    description:
      "Set in the Jazz Age, this story of the fabulously wealthy Jay Gatsby and his love for Daisy Buchanan is a meditation on the American Dream.",
    rating: 4.4,
    cover: "#8e44ad",
    coverImg: "https://covers.openlibrary.org/b/id/7354312-L.jpg",
  },
  {
    id: 5,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    category: "Fiction",
    description:
      "Seen through the eyes of young Scout Finch, this Pulitzer Prize-winning novel deals with racial injustice and moral growth in the American South.",
    rating: 4.9,
    cover: "#d35400",
    coverImg: "https://covers.openlibrary.org/b/id/8810494-L.jpg",
  },
  {
    id: 6,
    title: "1984",
    author: "George Orwell",
    category: "Fiction",
    description:
      "A dystopian novel set in a totalitarian society where Big Brother watches everything. It introduced concepts like doublethink and Newspeak.",
    rating: 4.8,
    cover: "#2c3e50",
    coverImg: "https://covers.openlibrary.org/b/id/8575708-L.jpg",
  },
  {
    id: 7,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    category: "Non-Fiction",
    description:
      "A sweeping narrative of humanity's creation and evolution from foraging Stone Age bands to the nuclear-armed empires of today.",
    rating: 4.6,
    cover: "#16a085",
    coverImg: "https://covers.openlibrary.org/b/id/8739161-L.jpg",
  },
  {
    id: 8,
    title: "Educated",
    author: "Tara Westover",
    category: "Non-Fiction",
    description:
      "A memoir about a woman who grows up in a survivalist family in rural Idaho and eventually earns a PhD from Cambridge University.",
    rating: 4.7,
    cover: "#c0392b",
    coverImg: "https://covers.openlibrary.org/b/id/8739200-L.jpg",
  },
  {
    id: 9,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    category: "Fantasy",
    description:
      "Bilbo Baggins is swept into an epic quest to reclaim a mountain treasure guarded by the dragon Smaug. The prelude to The Lord of the Rings.",
    rating: 4.8,
    cover: "#27ae60",
    coverImg: "https://covers.openlibrary.org/b/id/6979861-L.jpg",
  },
  {
    id: 10,
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    category: "Fantasy",
    description:
      "An orphan boy discovers he is a wizard and enrolls in Hogwarts School of Witchcraft and Wizardry, setting off an epic adventure.",
    rating: 4.9,
    cover: "#8e44ad",
    coverImg: "https://covers.openlibrary.org/b/id/10521270-L.jpg",
  },
  {
    id: 11,
    title: "The Name of the Wind",
    author: "Patrick Rothfuss",
    category: "Fantasy",
    description:
      "The story of Kvothe — magician, warrior, musician, and legend. A beautifully written epic fantasy told in first person.",
    rating: 4.6,
    cover: "#e67e22",
    coverImg: "https://covers.openlibrary.org/b/id/8364120-L.jpg",
  },
  {
    id: 12,
    title: "Gone Girl",
    author: "Gillian Flynn",
    category: "Mystery",
    description:
      "On the morning of their fifth wedding anniversary, Amy Dunne disappears. Her husband Nick becomes the prime suspect in this twisted thriller.",
    rating: 4.3,
    cover: "#2980b9",
    coverImg: "https://covers.openlibrary.org/b/id/7887480-L.jpg",
  },
  {
    id: 13,
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    category: "Mystery",
    description:
      "Journalist Mikael Blomkvist and hacker Lisbeth Salander investigate the disappearance of a woman from a wealthy family. Gripping Scandinavian noir.",
    rating: 4.5,
    cover: "#c0392b",
    coverImg: "https://covers.openlibrary.org/b/id/8479015-L.jpg",
  },
];

// All available book categories
export const categories = ["Fiction", "Non-Fiction", "Sci-Fi", "Fantasy", "Mystery"];