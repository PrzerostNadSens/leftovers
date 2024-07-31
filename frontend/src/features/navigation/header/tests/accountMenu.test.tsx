import { KeyboardArrowDownOutlined, KeyboardArrowUpOutlined } from '@mui/icons-material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { render, screen } from '@testing-library/react';

const renderWithTheme = (component) => {
  const theme = createTheme();
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe('AccountMenu Icons', () => {
  it('renders KeyboardArrowDownOutlined icon', () => {
    renderWithTheme(<KeyboardArrowDownOutlined data-testid="account-arrow-down" />);
    const arrowDownIcon = screen.getByTestId('account-arrow-down');
    expect(arrowDownIcon).toBeInTheDocument();
  });

  it('renders KeyboardArrowUpOutlined icon', () => {
    renderWithTheme(<KeyboardArrowUpOutlined data-testid="account-arrow-up" />);
    const arrowUpIcon = screen.getByTestId('account-arrow-up');
    expect(arrowUpIcon).toBeInTheDocument();
  });

  it('applies correct styles to KeyboardArrowDownOutlined icon', () => {
    renderWithTheme(<KeyboardArrowDownOutlined data-testid="account-arrow-down" />);
    const arrowDownIcon = screen.getByTestId('account-arrow-down');
    expect(arrowDownIcon).toHaveClass('MuiSvgIcon-root');
  });

  it('applies correct styles to KeyboardArrowUpOutlined icon', () => {
    renderWithTheme(<KeyboardArrowUpOutlined data-testid="account-arrow-up" />);
    const arrowUpIcon = screen.getByTestId('account-arrow-up');
    expect(arrowUpIcon).toHaveClass('MuiSvgIcon-root');
  });

  it('renders both icons with correct accessibility attributes', () => {
    renderWithTheme(
      <>
        <KeyboardArrowDownOutlined data-testid="account-arrow-down" />
        <KeyboardArrowUpOutlined data-testid="account-arrow-up" />
      </>,
    );
    const arrowDownIcon = screen.getByTestId('account-arrow-down');
    const arrowUpIcon = screen.getByTestId('account-arrow-up');

    expect(arrowDownIcon).toHaveAttribute('aria-hidden', 'true');
    expect(arrowUpIcon).toHaveAttribute('aria-hidden', 'true');
  });

  it('renders icons with correct size', () => {
    renderWithTheme(
      <>
        <KeyboardArrowDownOutlined data-testid="account-arrow-down" fontSize="small" />
        <KeyboardArrowUpOutlined data-testid="account-arrow-up" fontSize="large" />
      </>,
    );
    const arrowDownIcon = screen.getByTestId('account-arrow-down');
    const arrowUpIcon = screen.getByTestId('account-arrow-up');

    expect(arrowDownIcon).toHaveClass('MuiSvgIcon-fontSizeSmall');
    expect(arrowUpIcon).toHaveClass('MuiSvgIcon-fontSizeLarge');
  });

  it('renders icons with custom color', () => {
    renderWithTheme(
      <>
        <KeyboardArrowDownOutlined data-testid="account-arrow-down" color="primary" />
        <KeyboardArrowUpOutlined data-testid="account-arrow-up" color="secondary" />
      </>,
    );
    const arrowDownIcon = screen.getByTestId('account-arrow-down');
    const arrowUpIcon = screen.getByTestId('account-arrow-up');

    expect(arrowDownIcon).toHaveClass('MuiSvgIcon-colorPrimary');
    expect(arrowUpIcon).toHaveClass('MuiSvgIcon-colorSecondary');
  });
});
