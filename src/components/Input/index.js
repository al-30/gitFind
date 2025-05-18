import './styles.css';
export default function Input({ user, setUser }) {
  return (
    <input
      type="text"
      name="userName"
      value={user}
      onChange={(event) => setUser(event.target.value)}
      placeholder="@username"
    />
  );
}
