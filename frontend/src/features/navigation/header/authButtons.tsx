import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { useAuth } from '../../../providers/auth-provider';

const AuthButtons = () => {
  const { login } = useAuth();

  return (
    <>
      <StyledLoginButton onClick={login}>Log in</StyledLoginButton>
      <StyledSignUpButton>Sign up</StyledSignUpButton>
    </>
  );
};

export default AuthButtons;

const StyledLoginButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  textTransform: 'none',
  padding: '6px 8px',
}));

const StyledSignUpButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  textTransform: 'none',
  padding: '6px 16px',
  variant: 'contained',
}));
