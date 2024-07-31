import { KeyboardArrowDownOutlined, KeyboardArrowUpOutlined } from '@mui/icons-material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { render, screen } from '@testing-library/react';

import React from 'react';

const renderWithTheme = (component) => {
  const theme = createTheme();
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe('RecipesMenu Icons', () => {
  it('renders KeyboardArrowDownOutlined icon', () => {
    renderWithTheme(<KeyboardArrowDownOutlined data-testid="arrow-down" />);
    const arrowDownIcon = screen.getByTestId('arrow-down');
    expect(arrowDownIcon).toBeInTheDocument();
  });

  it('renders KeyboardArrowUpOutlined icon', () => {
    renderWithTheme(<KeyboardArrowUpOutlined data-testid="arrow-up" />);
    const arrowUpIcon = screen.getByTestId('arrow-up');
    expect(arrowUpIcon).toBeInTheDocument();
  });

  it('applies correct styles to KeyboardArrowDownOutlined icon', () => {
    renderWithTheme(<KeyboardArrowDownOutlined data-testid="arrow-down" />);
    const arrowDownIcon = screen.getByTestId('arrow-down');
    expect(arrowDownIcon).toHaveClass('MuiSvgIcon-root');
  });

  it('applies correct styles to KeyboardArrowUpOutlined icon', () => {
    renderWithTheme(<KeyboardArrowUpOutlined data-testid="arrow-up" />);
    const arrowUpIcon = screen.getByTestId('arrow-up');
    expect(arrowUpIcon).toHaveClass('MuiSvgIcon-root');
  });

  it('renders both icons with correct accessibility attributes', () => {
    renderWithTheme(
      <>
        <KeyboardArrowDownOutlined data-testid="arrow-down" />
        <KeyboardArrowUpOutlined data-testid="arrow-up" />
      </>,
    );
    const arrowDownIcon = screen.getByTestId('arrow-down');
    const arrowUpIcon = screen.getByTestId('arrow-up');

    expect(arrowDownIcon).toHaveAttribute('aria-hidden', 'true');
    expect(arrowUpIcon).toHaveAttribute('aria-hidden', 'true');
  });
});
