import { Components, Theme } from '@mui/material';

export const createContainerTheme = (
  theme: Theme
): Components['MuiContainer'] => {
  return {
    defaultProps: {
      maxWidth: 'lg',
    },
  };
};

// TO DO Circle back  maxwith error changed from xxl to lg if error.
