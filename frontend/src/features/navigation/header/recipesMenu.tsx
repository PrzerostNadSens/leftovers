import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import { Link } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import React from 'react';

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

const RecipesMenu = () => {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div onMouseEnter={handleOpen} onMouseLeave={handleClose} style={{ display: 'flex', alignItems: 'center' }}>
      <Button
        aria-controls={open ? 'recipes-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        Recipes <ArrowDropDownIcon />
      </Button>
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
    </div>
  );
};

export default RecipesMenu;
