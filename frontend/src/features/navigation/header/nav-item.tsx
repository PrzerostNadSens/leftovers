import { Link } from '@mui/material';
import { PropsWithChildren } from 'react';
import { Link as RouterLink } from 'react-router-dom';

interface NavItemProps extends PropsWithChildren {
  href: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, children }) => {
  return (
    <Link
      component={RouterLink}
      to={href}
      sx={{
        fontSize: '0.875rem',
        fontWeight: 400,
        cursor: 'pointer',
        listStyle: 'none',
        color: 'text.primary',
        transition: 'all .3s ease-in-out',
        textDecoration: 'underline transparent',
        '&:hover': {
          textDecorationColor: 'primary.main',
          color: 'primary.main',
        },
      }}
    >
      {children}
    </Link>
  );
};

export default NavItem;