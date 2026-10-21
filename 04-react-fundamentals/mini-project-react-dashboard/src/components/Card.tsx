
type CardProps = {
  title: string;
  category: string;
  description: string;
  author: string;
  date: string;
  onRead: () => void;
};

function Card({
  title,
  category,
  description,
  author,
  date,
  onRead,
}: CardProps) {
  return (
    <article className="article-card">
      <span className="article-category">{category}</span>
      <h2>{title}</h2>
      <p className="article-description">{description}</p>

      <div className="article-meta">
        <span>{author}</span>
        <span>{date}</span>
      </div>

      <button className="read-button" onClick={onRead}>
        Baca artikel
      </button>
    </article>
  );
}

export default Card;
