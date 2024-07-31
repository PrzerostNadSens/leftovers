import { ThemeProvider, createTheme } from '@mui/material/styles';
import { render, screen } from '@testing-library/react';

import AddIcon from '@mui/icons-material/Add';

const renderWithTheme = (component) => {
  const theme = createTheme();
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe('AddIcon', () => {
  it('renders the AddIcon component', () => {
    renderWithTheme(<AddIcon data-testid="add-icon" />);
    const addIconElement = screen.getByTestId('add-icon');
    expect(addIconElement).toBeInTheDocument();
  });

  it('applies correct MUI styles to the AddIcon', () => {
    renderWithTheme(<AddIcon data-testid="add-icon" />);
    const addIconElement = screen.getByTestId('add-icon');
    expect(addIconElement).toHaveClass('MuiSvgIcon-root');
  });

  it('renders AddIcon with custom color', () => {
    renderWithTheme(<AddIcon data-testid="add-icon" color="primary" />);
    const addIconElement = screen.getByTestId('add-icon');
    expect(addIconElement).toHaveClass('MuiSvgIcon-colorPrimary');
  });

  it('renders AddIcon with custom size', () => {
    renderWithTheme(<AddIcon data-testid="add-icon" fontSize="large" />);
    const addIconElement = screen.getByTestId('add-icon');
    expect(addIconElement).toHaveClass('MuiSvgIcon-fontSizeLarge');
  });

  it('renders AddIcon with correct accessibility attributes', () => {
    renderWithTheme(<AddIcon data-testid="add-icon" />);
    const addIconElement = screen.getByTestId('add-icon');
    expect(addIconElement).toHaveAttribute('aria-hidden', 'true');
  });
});
