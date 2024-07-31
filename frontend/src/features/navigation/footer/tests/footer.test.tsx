import { ThemeProvider, createTheme } from '@mui/material/styles';
import { render, screen } from '@testing-library/react';

import Footer from '../footer';

const renderWithTheme = (component) => {
  const theme = createTheme();
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe('Footer', () => {
  beforeEach(() => {
    renderWithTheme(<Footer />);
  });

  it('renders contact email link with correct href', () => {
    const emailLink = screen.getByRole('link', { name: /contact@leftovers.com/i });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute('href', 'mailto:contact@leftovers.com');
  });

  it('renders Terms of Services and Privacy Policy links with correct hrefs', () => {
    const termsLink = screen.getByRole('link', { name: /terms of services/i });
    const privacyLink = screen.getByRole('link', { name: /privacy policy/i });

    expect(termsLink).toBeInTheDocument();
    expect(termsLink).toHaveAttribute('href', '/terms-of-services');

    expect(privacyLink).toBeInTheDocument();
    expect(privacyLink).toHaveAttribute('href', '/privacy-policy');
  });

  it('renders powered by link with correct href and text', () => {
    const poweredByLink = screen.getByRole('link', { name: /powered by/i });
    expect(poweredByLink).toBeInTheDocument();
    expect(poweredByLink).toHaveAttribute('href', 'https://chatgpt.com/');
    expect(poweredByLink).toHaveTextContent('powered by');
    expect(poweredByLink).toHaveTextContent('BotAI');
  });

  it('applies correct styles to links', () => {
    const emailLink = screen.getByRole('link', { name: /contact@leftovers.com/i });
    const termsLink = screen.getByRole('link', { name: /terms of services/i });
    const privacyLink = screen.getByRole('link', { name: /privacy policy/i });

    expect(emailLink).toHaveClass('MuiLink-root');
    expect(termsLink).toHaveClass('MuiLink-root');
    expect(privacyLink).toHaveClass('MuiLink-root');
  });

  it('displays the correct number of links', () => {
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(6);
  });

  it('renders the correct text content', () => {
    expect(screen.getByText('contact@leftovers.com')).toBeInTheDocument();
    expect(screen.getByText('Terms of Services')).toBeInTheDocument();
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
    const poweredByLink = screen.getByRole('link', { name: /powered by/i });
    expect(poweredByLink).toHaveTextContent('powered by');
    expect(poweredByLink).toHaveTextContent('BotAI');
  });

  it('should have correct vertical dividers', () => {
    const dividers = screen.getAllByRole('separator');
    expect(dividers).toHaveLength(2);
  });

  it('should have the correct alt text for social media icons', () => {
    const instagramIcon = screen.getByTestId('InstagramIcon');
    const facebookIcon = screen.getByTestId('FacebookIcon');

    expect(instagramIcon).toHaveAttribute('aria-hidden', 'true');
    expect(facebookIcon).toHaveAttribute('aria-hidden', 'true');
  });
});
