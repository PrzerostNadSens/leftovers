import {
  AppBar,
  Button,
  ClickAwayListener,
  Grow,
  InputBase,
  Menu,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Toolbar,
} from '@mui/material';
import { alpha, styled } from '@mui/material/styles';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../../../assets/navigation/logo-green.png';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  width: '546px',
  height: '40px',
  padding: '8px 0px 8px 0px',
  display: 'flex',
  alignItems: 'center',
  opacity: 1,
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  right: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 1),
    paddingRight: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}));

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [open, setOpen] = React.useState(false);
  const [recipesAnchorEl, setRecipesAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleRecipesMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setRecipesAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleRecipesMenuClose = () => {
    setOpen(false);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const menuId = 'primary-search-account-menu';

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Saved recipes</MenuItem>
      <MenuItem onClick={handleMenuClose}>My recipes</MenuItem>
      <MenuItem onClick={handleMenuClose}>Log out</MenuItem>
    </Menu>
  );

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Link to="/">
          <img src={logo} alt="Logo" style={{ width: 40, height: 40, marginRight: 16 }} />
        </Link>
        <Search>
          <StyledInputBase placeholder="Search" inputProps={{ 'aria-label': 'search' }} />
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
        </Search>
        <div style={{ flexGrow: 1 }} />
        <div
          onMouseEnter={handleRecipesMenuOpen}
          onMouseLeave={handleRecipesMenuClose}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <Button
            aria-controls={open ? 'recipes-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            Recipes <ArrowDropDownIcon />
          </Button>
          <Popper open={open} anchorEl={recipesAnchorEl} role={undefined} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleRecipesMenuClose}>
                    <MenuList autoFocusItem={open} id="recipes-menu">
                      <MenuItem onClick={handleMenuClose}>🍽️ All recipes</MenuItem>
                      <MenuItem onClick={handleMenuClose}>🥪 Breakfasts</MenuItem>
                      <MenuItem onClick={handleMenuClose}>🍔 Lunch</MenuItem>
                      <MenuItem onClick={handleMenuClose}>🥐 Baking</MenuItem>
                      <MenuItem onClick={handleMenuClose}>🧁 Desserts</MenuItem>
                      <MenuItem onClick={handleMenuClose}>🍹 Drinks</MenuItem>
                      <MenuItem onClick={handleMenuClose}>🍿 Snacks</MenuItem>
                      <MenuItem onClick={handleMenuClose}>🥗 Salads</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
        <Button color="inherit">Log in</Button>
        <Button variant="contained" color="primary">
          Sign up
        </Button>
      </Toolbar>
      {renderMenu}
    </AppBar>
  );
};

export default Header;
