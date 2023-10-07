import { ThemeProvider, createTheme } from '@mui/material';
import { HomePage } from './components/home-page';

const theme = createTheme({
  typography: {
    fontFamily: [
      "Public Sans",
      "Roboto",
      "Helvetica",
      "Arial",
      "sans-serif",
    ].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
