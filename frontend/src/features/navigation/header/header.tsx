import AccountMenu from './accountMenu';
import AddRecipeButton from './addRecipeButton';
import AppBar from '@mui/material/AppBar';
import AuthButtons from './authButtons';
import Logo from './logo';
import RecipesMenu from './recipesMenu';
import Search from './search';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import { useAuth } from '../../../providers/auth-provider';

const Header = () => {
  const { isAuthenticated } = useAuth();

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <StyledToolbar
        sx={{
          paddingX: { xs: '1.5rem', lg: '4.5rem' },
        }}
      >
        <Logo />
        <Search />
        <div style={{ flexGrow: 1 }} />
        <AddRecipeButton />
        <RecipesMenu />
        {isAuthenticated ? <AccountMenu /> : <AuthButtons />}
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  gap: '16px',
  backgroundColor: theme.palette.background.paperElevation0,
  padding: '0px var(--9) 0px var(--9)',
}));
