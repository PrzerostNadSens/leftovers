import { KeyboardArrowDownOutlined, KeyboardArrowUpOutlined } from '@mui/icons-material';

import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import { Link } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import React from 'react';
import { styled } from '@mui/material/styles';

const menuItems = [
  { label: '🍽️ All recipes', path: '/recipes/all' },
  { label: '🥪 Breakfasts', path: '/recipes/breakfasts' },
  { label: '🍔 Lunch', path: '/recipes/lunch' },
  { label: '🥐 Baking', path: '/recipes/baking' },
  { label: '🧁 Desserts', path: '/recipes/desserts' },
  { label: '🍹 Drinks', path: '/recipes/drinks' },
  { label: '🍿 Snacks', path: '/recipes/snacks' },
  { label: '🥗 Salads', path: '/recipes/salads' },
];

const StyledButton = styled(Button)(({ theme, clicked }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(1),
  textTransform: 'none',
  backgroundColor: clicked ? theme.palette.action.hover : 'transparent',
  color: theme.palette.text.secondary,
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const Container = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
}));

const RecipesMenu = () => {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [clicked, setClicked] = React.useState(false);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
    setClicked(true);
  };

  const handleClose = () => {
    setOpen(false);
    setClicked(false);
  };

  return (
    <Container onMouseEnter={handleOpen} onMouseLeave={handleClose}>
      <StyledButton
        aria-controls={open ? 'recipes-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleOpen}
        clicked={clicked}
      >
        Recipes {open ? <KeyboardArrowUpOutlined /> : <KeyboardArrowDownOutlined />}
      </StyledButton>
      <Popper open={open} anchorEl={anchorEl} role={undefined} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} id="recipes-menu">
                  {menuItems.map(({ label, path }) => (
                    <MenuItem key={path} onClick={handleClose} component={Link} to={path}>
                      {label}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Container>
  );
};

export default RecipesMenu;
