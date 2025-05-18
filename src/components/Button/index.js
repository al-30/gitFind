import './styles.css';
export default function Button({ handleGetData }) {
  return (
    <button type="submit" onClick={handleGetData}>
      Buscar
    </button>
  );
}
