
import { useEffect, useState } from "react";
import Card from "./components/Card";
import Button from "./components/Button";
import "./App.css";

type Article = {
  id: number;
  title: string;
  category: string;
  description: string;
  author: string;
  date: string;
};

const initialArticles: Article[] = [
  {
    id: 1,
    title: "Memahami Dasar React",
    category: "React",
    description:
      "Kenali component, JSX, props, dan state sebagai fondasi membangun aplikasi React.",
    author: "Cantika",
    date: "22 Oktober 2026",
  },
  {
    id: 2,
    title: "Mengenal TypeScript",
    category: "TypeScript",
    description:
      "Pelajari bagaimana type membantu membuat kode JavaScript lebih terstruktur.",
    author: "Cantika",
    date: "21 Oktober 2026",
  },
  {
    id: 3,
    title: "Belajar Menggunakan useEffect",
    category: "React",
    description:
      "Pahami cara menjalankan efek samping ketika component dipasang atau state berubah.",
    author: "Cantika",
    date: "20 Oktober 2026",
  },
  {
    id: 4,
    title: "Membuat UI yang Responsif",
    category: "UI/UX",
    description:
      "Susun tampilan dashboard yang tetap nyaman digunakan pada berbagai ukuran layar.",
    author: "Cantika",
    date: "19 Oktober 2026",
  },
];

function App() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setLoading(true);

    const loadArticles = async () => {
      await new Promise<void>((resolve) => {
        window.setTimeout(resolve, 500);
      });

      setArticles(initialArticles);
      setLoading(false);
    };

    void loadArticles();
  }, []);

  const categories = [
    "Semua",
    ...new Set(initialArticles.map((article) => article.category)),
  ];

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "Semua" ||
      article.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  function handleRead(title: string) {
    setMessage(`Kamu memilih artikel "${title}". Selamat membaca!`);
  }

  return (
    <main className="app-container">
      <header className="site-header">
        <a className="brand" href="#">
          ArticleHub<span>.</span>
        </a>

        <span className="header-label">Dashboard Artikel</span>
      </header>

      <section className="hero">
        <p className="eyebrow">RUANG BELAJAR DIGITAL</p>
        <h1>
          Temukan ide.
          <br />
          Kembangkan <span>wawasan.</span>
        </h1>
        <p className="hero-description">
          Kumpulan artikel untuk menemani perjalanan belajarmu dalam
          dunia teknologi dan pengembangan web.
        </p>
      </section>

      <section className="articles-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">JELAJAHI KOLEKSI</p>
            <h2>Artikel terbaru</h2>
          </div>

          <span className="article-count">
            {filteredArticles.length} artikel
          </span>
        </div>

        <div className="filters">
          <input
            type="search"
            placeholder="Cari judul atau deskripsi artikel..."
            aria-label="Cari artikel"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />

          <select
            aria-label="Filter kategori"
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {message && (
          <div className="message" role="status">
            <p>{message}</p>
            <Button
              variant="secondary"
              onClick={() => setMessage("")}
            >
              Tutup
            </Button>
          </div>
        )}

        {loading ? (
          <p className="status-message">Sedang memuat artikel...</p>
        ) : filteredArticles.length > 0 ? (
          <div className="article-grid">
            {filteredArticles.map((article) => (
              <Card
                key={article.id}
                title={article.title}
                category={article.category}
                description={article.description}
                author={article.author}
                date={article.date}
                onRead={() => handleRead(article.title)}
              />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h3>Artikel tidak ditemukan</h3>
            <p>Coba gunakan kata kunci atau kategori lainnya.</p>
            <Button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("Semua");
              }}
            >
              Reset pencarian
            </Button>
          </div>
        )}
      </section>

      <footer className="site-footer">
        <p>ArticleHub — Belajar sedikit demi sedikit, berkembang setiap hari.</p>
      </footer>
    </main>
  );
}

export default App;
