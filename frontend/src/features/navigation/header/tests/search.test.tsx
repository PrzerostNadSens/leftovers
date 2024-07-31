import { ThemeProvider, createTheme } from '@mui/material/styles';
import { alpha, styled } from '@mui/material/styles';

import { render } from '@testing-library/react';

describe('alpha and styled functions', () => {
  it('should create a theme with alpha function', () => {
    const theme = createTheme({
      palette: {
        primary: {
          main: '#000000',
        },
      },
    });

    const color = alpha(theme.palette.primary.main, 0.5);
    expect(color).toBe('rgba(0, 0, 0, 0.5)');
  });

  it('should create a styled component', () => {
    const StyledComponent = styled('div')(({ theme }) => ({
      backgroundColor: theme.palette.primary.main,
    }));

    const { container } = render(
      <ThemeProvider theme={createTheme()}>
        <StyledComponent />
      </ThemeProvider>,
    );

    const styledElement = container.firstChild;
    expect(styledElement).toHaveStyle('background-color: #1976d2');
  });

  it('should combine alpha and styled functions', () => {
    const StyledComponent = styled('div')(({ theme }) => ({
      backgroundColor: alpha(theme.palette.primary.main, 0.3),
    }));

    const { container } = render(
      <ThemeProvider theme={createTheme()}>
        <StyledComponent />
      </ThemeProvider>,
    );

    const styledElement = container.firstChild;
    expect(styledElement).toHaveStyle('background-color: rgba(25, 118, 210, 0.3)');
  });
});
