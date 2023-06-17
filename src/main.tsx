import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { ThemeProvider, createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// Create a theme instance.
export const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
      light: '#e3f2fd',
      dark: '#6588DE',
    },
    secondary: {
      main: '#E3F6FC'
    },
    text: {
      primary: '#52585D',
      secondary: '#FDFDFE',
      disabled: '#96A9BA'
    },
    error: {
      main: red.A400
    }
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(',')
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>
)
