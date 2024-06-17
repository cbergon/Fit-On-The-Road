import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import AppAppBar from "@app/modules/AppAppBar";
import Hero from "@app/modules/Hero";
import LogoCollection from "@app/modules/LogoCollection";
import Highlights from "@app/modules/Highlights";
import Pricing from "@app/modules/Pricing";
import Testimonials from "@app/modules/Testimonials";
import FAQ from "@app/modules/FAQ";
import Footer from "@app/modules/Footer";
import Contact from "@app/modules/Contact";

import "../styles/theme-material/light.css";
import "../styles/theme-material/light-mc.css";
import "../styles/theme-material/light-hc.css";
import "../styles/theme-material/dark.css";
import "../styles/theme-material/dark-mc.css";
import "../styles/theme-material/dark-hc.css";
import EnterpriseFeatures from "@app/modules/EnterpriseFeatures";
import IndividualFeatures from "@app/modules/IndividualFeatures";

import { style } from "../styles/theme-material/style";

const defaultTheme = createTheme(style);

export default function LandingPage() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppAppBar />
      <Hero />
      <Box sx={{ bgcolor: "background.default" }}>
        <EnterpriseFeatures />
        <LogoCollection />
        <IndividualFeatures />
        <Divider />
        <Highlights />
        <Divider />
        <Testimonials />
        <Divider />
        <Pricing />
        <Divider />
        <Contact />
        <Divider />
        <FAQ />
        <Divider />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
