import { ThemeProvider, createTheme } from '@mui/material/styles';
import { render, screen } from '@testing-library/react';

import Button from '@mui/material/Button';

const renderWithTheme = (component) => {
  const theme = createTheme();
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe('Button', () => {
  it('renders a button with correct text', () => {
    renderWithTheme(<Button>Test Button</Button>);
    const buttonElement = screen.getByRole('button', { name: /test button/i });
    expect(buttonElement).toBeInTheDocument();
  });

  it('applies correct MUI styles to the button', () => {
    renderWithTheme(<Button>Styled Button</Button>);
    const buttonElement = screen.getByRole('button', { name: /styled button/i });
    expect(buttonElement).toHaveClass('MuiButton-root');
  });

  it('renders a disabled button', () => {
    renderWithTheme(<Button disabled>Disabled Button</Button>);
    const buttonElement = screen.getByRole('button', { name: /disabled button/i });
    expect(buttonElement).toBeDisabled();
  });

  it('renders a button with custom color', () => {
    renderWithTheme(<Button color="secondary">Colored Button</Button>);
    const buttonElement = screen.getByRole('button', { name: /colored button/i });
    expect(buttonElement).toHaveClass('MuiButton-colorSecondary');
  });

  it('renders a button with custom variant', () => {
    renderWithTheme(<Button variant="outlined">Outlined Button</Button>);
    const buttonElement = screen.getByRole('button', { name: /outlined button/i });
    expect(buttonElement).toHaveClass('MuiButton-outlined');
  });
});
