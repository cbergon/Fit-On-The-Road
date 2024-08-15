import React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const logoStyle = {
  width: "140px",
  height: "auto",
};

// #region footer links
interface FooterLink {
  name: string;
  scrollTo: string;
}

interface FooterColumns {
  title: string;
  link: string;
  children: FooterLink[];
}

const footerLinks: FooterColumns[] = [
  {
    title: "Nos services",
    link: "",
    children: [
      {
        name: "Pour les entreprises",
        scrollTo: "enterprise-features",
      },
      {
        name: "Pour les particuliers",
        scrollTo: "individual-features",
      },
      {
        name: "Ambition",
        scrollTo: "highlights",
      },
      {
        name: "Avis clients",
        scrollTo: "testimonials",
      },
      {
        name: "Tarifs",
        scrollTo: "pricing",
      },
      {
        name: "Questions fréquentes",
        scrollTo: "faq",
      },
    ],
  },
  {
    title: "Fit On The Road",
    link: "about-us",
    children: [
      {
        name: "Notre histoire",
        scrollTo: "history",
      },
      {
        name: "Nos valeurs",
        scrollTo: "values",
      },
      {
        name: "Ils parlent de nous",
        scrollTo: "press",
      },
    ],
  },
  {
    title: "Fit On The Road",
    link: "terms",
    children: [
      {
        name: "Conditions générales",
        scrollTo: "general-terms",
      },
      {
        name: "Politique de confidentialité",
        scrollTo: "privacy-terms",
      },
      {
        name: "Mentions légales",
        scrollTo: "legal-terms",
      },
    ],
  },
];
// #endregion

// #region COPYRIGHT GENERATION
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {"Copyright © "}
      <Link href="about-us">Fit On The Road</Link>&nbsp;
      {new Date().getFullYear()}
    </Typography>
  );
}
// #endregion

function Footer() {
  // #region SCROLLING FUNCTION
  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: "smooth" });
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
    }
  };
  // #endregion

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: "center", md: "left" },
      }}
    >
      {/* FOOTER TOP */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: { xs: "center", sm: "start" },
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            minWidth: { xs: "100%", sm: "60%" },
          }}
        >
          {/* LOGO BOX */}
          <Box sx={{ ml: "-15px" }}>
            <img
              src="/logos/Full - Long - Kettle - Fond noir.svg"
              style={logoStyle}
              alt="logo fit on the road"
            />
          </Box>
          {/* SECTIONS */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 4,
              minWidth: { xs: "100%", sm: "60%" },
            }}
          >
            {footerLinks.map((column) => (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: { xs: "center", sm: "start" },
                  justifyContent: { xs: "center", sm: "start" },
                  gap: 1,
                  width: "100%",
                }}
              >
                <Typography component="h4" variant="body2" fontWeight={600}>
                  {column.title}
                </Typography>
                {column.title === "Nos services" &&
                  column.children.map((child) => (
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    <Link
                      color="text.secondary"
                      onClick={() => scrollToSection(child.scrollTo)}
                    >
                      {child.name}
                    </Link>
                  ))}
                {column.title !== "Nos services" &&
                  column.children.map((child) => (
                    <Link color="text.secondary" href={child.scrollTo}>
                      {child.name}
                    </Link>
                  ))}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      {/* FOOTER BOTTOM */}
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", sm: "space-between" },
          pt: { xs: 4, sm: 8 },
          width: "100%",
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        {/* TERMS OF USAGE */}
        <div>
          <Link color="text.secondary" href="terms">
            Politique de confidentialité
          </Link>
          <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
            &nbsp;•&nbsp;
          </Typography>
          <Link color="text.secondary" href="terms">
            Conditions générales
          </Link>
          <Copyright />
        </div>
        {/* SOCIAL NETWORKS LINKS */}
        <Stack
          direction="row"
          justifyContent="left"
          spacing={1}
          useFlexGap
          sx={{
            color: "text.secondary",
          }}
        >
          <IconButton
            color="inherit"
            href="https://www.linkedin.com/in/fit-on-the-road-a938b312a?utm_source=share&utm_campaign=share_via&utm_content=profile"
            aria-label="LinkedIn"
            sx={{ alignSelf: "center" }}
            target="_blank"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://www.instagram.com/fit.on.the.road?igsh=MWN1dTZ1M3RtZDhpaw=="
            aria-label="Instagram"
            sx={{ alignSelf: "center" }}
            target="_blank"
          >
            <InstagramIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}

export default Footer;
