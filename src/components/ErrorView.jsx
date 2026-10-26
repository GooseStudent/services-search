export default function ErrorView({ message, onRetry }) {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <p style={{ color: 'red' }}>Ошибка: {message}</p>
      <button onClick={onRetry}>Повторить запрос</button>
    </div>
  );
}