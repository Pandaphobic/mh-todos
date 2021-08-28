import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import { ThemeProvider, createTheme } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"

const theme = createTheme({
  palette: {
    type: "dark"
  },
  typography: {
    fontFamily: "Rajdhani"
  }
})

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
)
