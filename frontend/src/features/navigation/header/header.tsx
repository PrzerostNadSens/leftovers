import AppBar from '@mui/material/AppBar';
import AuthButtons from './authButtons';
import Logo from './logo';
import RecipesMenu from './recipesMenu';
import Search from './search';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';

const Header = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <StyledToolbar>
        <Logo />
        <Search />
        <div style={{ flexGrow: 1 }} />
        <RecipesMenu />
        <AuthButtons />
      </StyledToolbar>
    </AppBar>
  );
};

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  gap: '16px',
  backgroundColor: theme.palette.background.paperElevation0,
  padding: '0px var(--9) 0px var(--9)',
}));

export default Header;
