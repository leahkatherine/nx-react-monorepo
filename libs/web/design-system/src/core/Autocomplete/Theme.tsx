import { Components, Theme } from '@mui/material'; // TO DO: saying state is not found on type 'Palette'.

export const createAutocompleteTheme = (
  theme: Theme
): Components['MuiAutocomplete'] => {
  return {
    styleOverrides: {
      inputRoot: {
        '.MuiInput-input': {
          padding: 0,
        },
      },
      listbox: {
        '.MuiAutocomplete-option[aria-selected="true"]': {
          backgroundColor: theme.palette.state.surface.selected,
        },
        '.MuiAutocomplete-option[aria-selected="true"].Mui-focused': {
          backgroundColor: theme.palette.state.surface.focused,
        },
      },
    },
  };
};
