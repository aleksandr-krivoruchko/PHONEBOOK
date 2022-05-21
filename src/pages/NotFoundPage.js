import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <h1>
      This page doesn't exist.Go <Link to="/">Home</Link>
    </h1>
  );
}
