import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <h1>
      Цієї сторінки не існує. Перейти до<Link to="/">Головна</Link>
    </h1>
  );
}
