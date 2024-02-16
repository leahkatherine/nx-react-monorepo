import { Components, Theme } from '@mui/material';
// TO DO: pallette type

export const createDividerTheme = (theme: Theme): Components['MuiDivider'] => {
  return {
    styleOverrides: {
      root: {
        borderColor: theme.palette.primary[50],
      },
    },
  };
};
