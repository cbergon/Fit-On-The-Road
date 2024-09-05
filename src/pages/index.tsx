import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

import Hero from "@app/modules/landing/Hero";
import Highlights from "@app/modules/Highlights";
import Pricing from "@app/modules/Pricing";
import Testimonials from "@app/modules/Testimonials";
import FAQ from "@app/modules/FAQ";
import Contact from "@shared/Contact";
import EnterpriseFeatures from "@app/modules/EnterpriseFeatures";
import IndividualFeatures from "@app/modules/IndividualFeatures";
import { UserType } from "@app/types/types";

function LandingPage() {
  return (
    <>
      <Hero />
      <Box sx={{ bgcolor: "background.default" }}>
        <EnterpriseFeatures />
        <IndividualFeatures />
        <Divider />
        <Highlights />
        <Divider />
        <Pricing />
        <Divider />
        <Testimonials />
        <Divider />
        <Contact defaultUserType={UserType.ENTERPRISE} />
        <Divider />
        <FAQ />
      </Box>
    </>
  );
}

export default LandingPage;
