import './styles.css';

export default function ItemList({ title, description, url }) {
  return (
    <div className="item-list">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <strong>{title}</strong>
      </a>
      <p>{description}</p>
      <hr />
    </div>
  );
}
