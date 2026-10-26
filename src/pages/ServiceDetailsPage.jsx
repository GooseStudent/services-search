import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { serviceDetailsRequested } from '../store/actions';
import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';

export default function ServiceDetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { item, loading, error } = useSelector((state) => state.details);

  useEffect(() => {
    dispatch(serviceDetailsRequested(id));
  }, [dispatch, id]);

  if (loading) return <Spinner />;
  if (error) {
    return (
      <ErrorView
        message={error}
        onRetry={() => dispatch(serviceDetailsRequested(id))}
      />
    );
  }
  if (!item) return null;

  return (
    <div>
      <h1>{item.name}</h1>
      <p>Цена: {item.price} ₽</p>
      {item.content && <p>{item.content}</p>}
    </div>
  );
}