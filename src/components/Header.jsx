// src/components/Header.jsx
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="header">
    <h1>Mi Página React</h1>
    <nav>
      <Link to="/page1">Página 1</Link>
      <Link to="/page2">Página 2</Link>
      <Link to="/page3">Página 3</Link>
      <Link to="/page4">Página 4</Link>
      <Link to="/page5">Página 5</Link>
    </nav>
  </header>
);

export default Header;