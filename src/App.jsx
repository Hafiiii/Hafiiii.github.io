// slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Route, BrowserRouter, Routes } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
// @mui
import { ThemeProvider, styled } from "@mui/material/styles";
// theme
import theme from "../src/theme/index";

// sections
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import PageNotFound from "./Components/PageNotFound/PageNotFound";

// notistack
import { SnackbarProvider, MaterialDesignContent } from 'notistack';

const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
  '&.notistack-MuiContent-success': {
    backgroundColor: 'rgb(0, 0, 0, 0.9)',
    boxShadow: 'none',
    fontFamily: 'JOST',
  },
  '&.notistack-MuiContent-error': {
    backgroundColor: 'rgb(151, 12, 12, 0.9)',
    boxShadow: 'none',
    fontFamily: 'JOST',
  },
}));

// ----------------------------------------------------------------------

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter basename="/">
        <ThemeProvider theme={theme}>
          <SnackbarProvider
            autoHideDuration={1500}
            maxSnack={4}
            Components={{
              success: StyledMaterialDesignContent,
              error: StyledMaterialDesignContent,
            }}
          >
            <Routes>
              <Route element={<Layout />}>
                <Route path='/' element={<Home />} />
                <Route path="/*" element={<PageNotFound />} />
              </Route>
            </Routes>
          </SnackbarProvider>
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  )
}
