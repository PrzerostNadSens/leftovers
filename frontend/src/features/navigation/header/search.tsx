import { alpha, styled } from '@mui/material/styles';

import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = () => (
  <SearchContainer>
    <StyledInputBase placeholder="Search" inputProps={{ 'aria-label': 'search' }} />
    <SearchIconWrapper>
      <SearchIcon />
    </SearchIconWrapper>
  </SearchContainer>
);

export default Search;

const SearchContainer = styled('div')(({ theme }) => ({
  boxSizing: 'border-box',
  position: 'relative',
  borderRadius: '4px',
  border: '1px solid rgba(0, 0, 0, 0.23)',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  width: '570px',
  height: '40px',
  padding: '0px 12px',
  display: 'flex',
  alignItems: 'center',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  right: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.action.active,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  padding: theme.spacing(0),
  '& .MuiInputBase-input': {
    padding: theme.spacing(0, 1),
    paddingRight: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}));
