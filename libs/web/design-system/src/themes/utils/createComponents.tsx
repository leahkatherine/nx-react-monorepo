import {
  createAccordionTheme,
  createAccordionActionsTheme,
  createAccordionDetailsTheme,
  createAccordionSummaryTheme,
} from '../../core/Accordion/Theme';
import { createAlertTheme } from '../../core/Alert/Theme'; // TO DO: Create Alert Theme
import { createAutocompleteTheme } from '../../core/Autocomplete/Theme'; // TO DO: Create Autocomplete Theme
import { createAvatarTheme } from '../../core/Avatar/Theme'; // TO DO: Create Avatar Theme
import { createButtonTheme } from '../../core/Button/Theme'; // TO DO: Create Button Theme
import { createBreadcrumbsTheme } from '../../core/Breadcrumbs/Theme'; // TO DO: Create Breadcrumbs Theme
import {
  createCardTheme,
  createCardActionAreaTheme,
} from '../../core/Card/Theme'; // TO DO: Create Card Theme
import { createCheckboxTheme } from '../../core/Checkbox/Theme'; // TO DO: Create Checkbox Theme
import { createChipTheme } from '../../core/Chip/Theme'; // TO DO: Create Chip Theme
import { createContainerTheme } from '../../core/Container/Theme'; // TO DO: Create Container Theme
import {
  createDialogActionsTheme,
  createDialogContentTheme,
  createDialogContentTextTheme,
  createDialogTitleTheme,
} from '../../core/Dialog/Theme';
import { createDividerTheme } from '../../core/Divider/Theme'; // TO DO: Create Divider Theme
import { createFabTheme } from '../../core/Fab/Theme'; // TO DO: Create Fab Theme
import { createFilledInputTheme } from '../../core/FilledInput/Theme'; // TO DO: Create FilledInput Theme
import { createFormControlLabelTheme } from '../../core/FormControl/Theme'; // TO DO: Create FormControlLabel Theme
import { createFormHelperTextTheme } from '../../core/FormHelperText/Theme'; // TO DO: Create FormHelperText Theme
import { createGridTheme } from '../../core/Grid/Theme'; // TO DO: Create Grid Theme
import {
  createInputTheme,
  createInputLabelTheme,
} from '../../core/Input/Theme'; // TO DO: Create Input Theme
import { createMenuItemTheme } from '../../core/Menu/Theme'; // TO DO: Create MenuItem Theme
import { createRadioTheme } from '../../core/Radio/Theme'; // TO DO: Create Radio Theme
import { createSliderTheme } from '../../core/Slider/Theme'; // TO DO: Create Slider Theme
import { createStepperTheme } from '../../core/Stepper/Theme'; // TO DO: Create Stepper Theme
import { createSwitchTheme } from '../../core/Switch/Theme'; // TO DO: Create Switch Theme
import {
  createTableCellTheme,
  createTableRowTheme,
} from '../../core/Table/Theme'; // TO DO: Create TableCell Theme
import { createTabTheme, createTabsTheme } from '../../core/Tabs/Theme'; // TO DO: Create Tab Theme
import { createTextFieldTheme } from '../../core/TextField/Theme'; // TO DO: Create TextField Theme
import {
  createToggleButtonTheme,
  createToggleButtonGroupTheme,
} from '../../core/ToggleButton/Theme'; // TO DO: Create ToggleButton Theme
import { createTooltipTheme } from '../../core/Tooltip/Theme'; // TO DO: Create Tooltip Theme
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
