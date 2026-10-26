import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { servicesListRequested } from '../store/actions';
import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';

export default function ServicesListPage() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.list);

  useEffect(() => {
    dispatch(servicesListRequested());
  }, [dispatch]);

  if (loading) return <Spinner />;
  if (error) {
    return (
      <ErrorView
        message={error}
        onRetry={() => dispatch(servicesListRequested())}
      />
    );
  }

  return (
    <div>
      <h1 className="page-title">Список услуг</h1>
      <ul className="services-list">
        {items.map((service) => (
          <li key={service.id} className="services-list__item">
            <Link
              to={`/${service.id}/details`}
              className="services-list__link"
            >
              <span className="services-list__name">{service.name}</span>
              <span className="services-list__price">{service.price} ₽</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}