// TODO: Export components individually with their own stylistic changes, yadada

import { Box } from '@mui/material';

export * from '@mui/material';

const CustomBox = ({ children }: { children: any }) => {
  return <Box sx={{ color: 'red' }}>{children}</Box>;
};

export { CustomBox as Box };
