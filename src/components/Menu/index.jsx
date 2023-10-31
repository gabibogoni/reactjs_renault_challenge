import { Link } from 'react-router-dom';
import './styles.css';

export const Menu = () => {
  return (
    <>
      <div className="menu-container">
        <div className="menu">
          <Link to="/">
            <img
              src="https://www.renaultgroup.com/wp-content/uploads/2021/03/nouveau_logo_renault_banner.jpg"
              width="50px"
            ></img>
          </Link>

          <div className="menu-item">
            <Link to="/">Cadastro</Link>
          </div>

          <div className="menu-item">
            <Link to="/search">Consulta</Link>
          </div>
        </div>
      </div>
    </>
  );
};
