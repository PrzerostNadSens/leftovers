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
import { useAuth } from '../../../providers/auth-provider';

const menuItems = [
  { label: 'Saved recipes', path: '/recipes/saved' },
  { label: 'My recipes', path: '/recipes' },
  { label: 'Log out', path: '' },
];

const AccountMenu = () => {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { logout } = useAuth();

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMenuItemClick = (label: string) => {
    if (label === 'Log out') {
      logout();
    }
    handleClose();
  };

  return (
    <Container onMouseEnter={handleOpen} onMouseLeave={handleClose}>
      <StyledButton
        aria-controls={open ? 'my-account' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleOpen}
      >
        My account {open ? <KeyboardArrowUpOutlined /> : <KeyboardArrowDownOutlined />}
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
                <MenuList autoFocusItem={open} id="my-account">
                  {menuItems.map(({ label, path }) => (
                    <MenuItem
                      key={label}
                      onClick={() => handleMenuItemClick(label)}
                      component={label !== 'Log out' ? Link : 'div'}
                      to={path}
                    >
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

export default AccountMenu;

const StyledButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: '6px 16px',
  textTransform: 'none',
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const Container = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
}));
