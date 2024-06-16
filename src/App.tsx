import React from "react";
import { routes } from "generouted/react-router";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
// import "./styles/theme-material/dark.css";
// import customStyles from "./styles/M3.json";

// const customTheme = createTheme({
//   palette: {
//     mode: "dark",
//     primary: {
//       main: "#1c0e02",
//     },
//     secondary: {
//       main: "#15100b",
//     },
//   },
// });

// const customTheme = createTheme(customStyles);

function App() {
  const router = createBrowserRouter(routes);

  return (
    <>
      {/* <ThemeProvider> */}
      {/* <CssBaseline /> */}
      <RouterProvider router={router} />
      {/* </ThemeProvider> */}
    </>
  );
}

export default App;
