import React from "react";
import Router from './Router/Router';
import GlobalState from './globalState/globalState'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

function App() {

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#FF0000',
      },
      secondary: {
        main: '#11cb5f',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <GlobalState>
          <Router />
      </GlobalState>
    </ThemeProvider>
  );
}

export default App;
