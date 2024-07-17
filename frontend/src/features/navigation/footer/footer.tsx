import { Box, Divider, Grid, Link, styled, useTheme } from '@mui/material';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  const theme = useTheme();
  return (
    <FooterContainer
      sx={{
        paddingX: { xs: '1.5rem', lg: '4.5rem' },
        position: 'fixed',
        bottom: 0,
      }}
    >
      <Grid container direction="row" alignItems="center" justifyContent="space-between" gap={{ xs: 1, sm: 3 }}>
        <Grid item>
          <Grid container direction="row" alignItems="center" gap={1}>
            <Link href="https://www.instagram.com/">
              <InstagramIcon sx={{ fontSize: 32 }} />
            </Link>
            <Link href="https://www.facebook.com/">
              <FacebookIcon sx={{ fontSize: 32, color: '#1877F2' }} />
            </Link>
            <StyledLink
              sx={{ paddingLeft: { xs: 0, sm: '24px' }, color: theme.palette.text.secondary }}
              href="mailto:contact@leftovers.com"
            >
              contact@leftovers.com
            </StyledLink>
            <StyledDivider orientation="vertical" flexItem />
            <StyledLink sx={{ color: theme.palette.text.primary }} href="/terms-of-services">
              Terms of Services
            </StyledLink>
            <StyledDivider orientation="vertical" flexItem />
            <StyledLink sx={{ color: theme.palette.text.primary }} href="/privacy-policy">
              Privacy Policy
            </StyledLink>
          </Grid>
        </Grid>
        <StyledLink sx={{ color: theme.palette.text.secondary }} href="https://chatgpt.com/" target="_blank">
          powered by <span style={{ textDecoration: 'underline' }}>BotAI</span>
        </StyledLink>
      </Grid>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  boxSizing: 'border-box',
  minHeight: 56,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
}));

const StyledDivider = styled(Divider)(() => ({
  height: '24px',
  alignSelf: 'center',
  margin: '0 8px',
}));

const StyledLink = styled(Link)(() => ({
  textDecoration: 'none',
  fontSize: 14,
  fontWeight: 400,
}));
