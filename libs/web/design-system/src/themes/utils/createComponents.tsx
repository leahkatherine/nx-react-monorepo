import {
  createAccordionTheme,
  createAccordionActionsTheme,
  createAccordionDetailsTheme,
  createAccordionSummaryTheme,
} from '../../core';
import { createAlertTheme } from '../../core';
import { createAutocompleteTheme } from '../../core';
import { createAvatarTheme } from '../../core';
import { createButtonTheme } from '../../core';
import { createBreadcrumbsTheme } from '../../core';
import { createCardTheme, createCardActionAreaTheme } from '../../core';
import { createCheckboxTheme } from '../../core';
import { createChipTheme } from '../../core';
import { createContainerTheme } from '../../core';
import {
  createDialogActionsTheme,
  createDialogContentTheme,
  createDialogContentTextTheme,
  createDialogTitleTheme,
import { createDividerTheme } from '../../core';
import { createFabTheme } from '../../core';
import { createFilledInputTheme } from '../../core';
import { createFormControlLabelTheme } from '../../core';
import { createFormHelperTextTheme } from '../../core';
import { createGridTheme } from '../../core';
import { createInputTheme, createInputLabelTheme } from '../../core';
import { createMenuItemTheme } from '../../core';
import { createRadioTheme } from '../../core';
import { createSliderTheme } from '../../core';
import { createStepperTheme } from '../../core';
import { createSwitchTheme } from '../../core';
import { createTableCellTheme, createTableRowTheme } from '../../core/';
import { createTabTheme, createTabsTheme } from '../../core';
import { createTextFieldTheme } from '../../core';
import {
  createToggleButtonTheme,
  createToggleButtonGroupTheme,
} from '../../core';
import { createTooltipTheme } from '../../core'; 
import { Theme } from '@mui/material';

export const createComponents = (theme: Theme): Theme['components'] => {
  return {
    MuiAccordion: createAccordionTheme(theme),
    MuiAccordionActions: createAccordionActionsTheme(theme),
    MuiAccordionDetails: createAccordionDetailsTheme(theme),
    MuiAccordionSummary: createAccordionSummaryTheme(theme),
    MuiAlert: createAlertTheme(theme),
    MuiAutocomplete: createAutocompleteTheme(theme),
    MuiAvatar: createAvatarTheme(theme),
    MuiButton: createButtonTheme(theme),
    MuiBreadcrumbs: createBreadcrumbsTheme(theme),
    MuiCard: createCardTheme(theme),
    MuiCardActionArea: createCardActionAreaTheme(theme),
    MuiCheckbox: createCheckboxTheme(theme),
    MuiChip: createChipTheme(theme),
    MuiContainer: createContainerTheme(theme),
    MuiDialogActions: createDialogActionsTheme(theme),
    MuiDialogContent: createDialogContentTheme(theme),
    MuiDialogContentText: createDialogContentTextTheme(theme),
    MuiDialogTitle: createDialogTitleTheme(theme),
    MuiInput: createInputTheme(theme),
    MuiInputLabel: createInputLabelTheme(theme),
    MuiDivider: createDividerTheme(theme),
    MuiFab: createFabTheme(theme),
    MuiFilledInput: createFilledInputTheme(theme),
    MuiFormControlLabel: createFormControlLabelTheme(theme),
    MuiFormHelperText: createFormHelperTextTheme(theme),
    MuiGrid: createGridTheme(theme),
    MuiMenuItem: createMenuItemTheme(theme),
    MuiRadio: createRadioTheme(theme),
    MuiSlider: createSliderTheme(theme),
    MuiStepper: createStepperTheme(theme),
    MuiSwitch: createSwitchTheme(theme),
    MuiTab: createTabTheme(theme),
    MuiTableCell: createTableCellTheme(theme),
    MuiTableRow: createTableRowTheme(theme),
    MuiTabs: createTabsTheme(theme),
    MuiTextField: createTextFieldTheme(theme),
    MuiToggleButton: createToggleButtonTheme(theme),
    MuiToggleButtonGroup: createToggleButtonGroupTheme(theme),
    MuiTooltip: createTooltipTheme(theme),
  };
};
