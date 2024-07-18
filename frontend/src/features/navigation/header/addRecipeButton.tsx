import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { useAuth } from '../../../providers/auth-provider';

const AddRecipeButton = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      {isAuthenticated ? (
        <StyledAddRecipeButton>
          <StyledAddIcon className="material-icons"></StyledAddIcon>
          Add recipe
        </StyledAddRecipeButton>
      ) : null}
    </>
  );
};

export default AddRecipeButton;

const StyledAddRecipeButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  textTransform: 'none',
  padding: '6px 8px',
  display: 'flex',
  alignItems: 'center',
}));

const StyledAddIcon = styled(AddIcon)(() => ({
  width: '20px',
  height: '20px',
  marginRight: '4px',
}));
