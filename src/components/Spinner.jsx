import spinner from '../assets/spinner.png';

export default function Spinner() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <img
        src={spinner}
        alt="Загрузка..."
        style={{
          width: '48px',
          height: '48px',
          animation: 'spin 1s linear infinite',
        }}
      />
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}