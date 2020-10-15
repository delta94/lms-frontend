import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import { ToastContainer } from "react-toastify";
import theme from "./styles/theme";
import Router from "./Router";
import Auth from "./pages/Auth";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const loggedIn = useSelector((state) => state.user.name);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ToastContainer autoClose={2000} closeButton={false} />
      {loggedIn ? <Router /> : <Auth />}
    </ThemeProvider>
  );
};

export default App;
