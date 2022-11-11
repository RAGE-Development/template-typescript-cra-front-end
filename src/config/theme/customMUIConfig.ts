declare module '@mui/material/styles' {
  interface Theme {
    status: {
      test: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      test?: string;
    };
  }
}

export { }