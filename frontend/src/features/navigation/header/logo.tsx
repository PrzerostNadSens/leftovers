import { Link } from 'react-router-dom';
import logo from '../../../assets/navigation/logo-green.png';

const Logo = () => (
  <Link to="/">
    <img
      src={logo}
      alt="Logo"
      style={{
        width: 40,
        height: 40,
        padding: '3px 4px',
      }}
    />
  </Link>
);

export default Logo;
