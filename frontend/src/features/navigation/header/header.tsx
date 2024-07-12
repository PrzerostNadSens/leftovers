import AppBar from '@mui/material/AppBar';
import AuthButtons from './authButtons';
import Logo from './logo';
import RecipesMenu from './recipesMenu';
import Search from './search';
import Toolbar from '@mui/material/Toolbar';

const Header = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Logo />
        <Search />
        <div style={{ flexGrow: 1 }} />
        <RecipesMenu />
        <AuthButtons />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
