import * as React from "react";
import { alpha } from "@mui/material";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRounded from "@mui/icons-material/CloseRounded";

const sections = [
  {
    title: "Services",
    dst: "enterprise-features",
  },
  {
    title: "Témoignages",
    dst: "testimonials",
  },
  {
    title: "Ambitions",
    dst: "highlights",
  },
  {
    title: "Tarifs",
    dst: "pricing",
  },
  {
    title: "En savoir plus",
    dst: "faq",
  },
];

const logoStyle = {
  width: "140px",
  height: "auto",
  cursor: "pointer",
};

function AppAppBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

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
      setOpen(false);
    }
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: "transparent",
          backgroundImage: "none",
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexShrink: 0,
              borderRadius: "999px",
              bgcolor:
                theme.palette.mode === "light"
                  ? "rgba(255, 255, 255, 0.4)"
                  : "rgba(0, 0, 0, 0.4)",
              backdropFilter: "blur(24px)",
              maxHeight: 40,
              border: "1px solid",
              borderColor: "divider",
              boxShadow:
                theme.palette.mode === "light"
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : `0 0 1px ${alpha(
                      "#8B725D",
                      0.7,
                    )}, 1px 1.5px 2px -1px ${alpha(
                      "#8B725D",
                      0.65,
                    )}, 4px 4px 12px -2.5px ${alpha("#8B725D", 0.65)}`,
            })}
          >
            {/* MENU DESKTOP VERSION */}
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                ml: "-18px",
                px: 0,
              }}
            >
              <img
                src="/public/logos/Full - Long - Kettle - Fond noir.svg"
                style={logoStyle}
                alt="logo fit on the road"
              />
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                {sections.map((section) => (
                  <MenuItem
                    onClick={() => scrollToSection(section.dst)}
                    sx={{ py: "6px", px: "12px" }}
                  >
                    <Typography variant="body2" color="text.primary">
                      {section.title}
                    </Typography>
                  </MenuItem>
                ))}
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 0.5,
                alignItems: "center",
              }}
            >
              <Button
                color="primary"
                variant="contained"
                size="small"
                onClick={() => scrollToSection("contact")}
              >
                CONTACTER
              </Button>
            </Box>
            {/* MENU MOBILE VERSION */}
            <Box sx={{ display: { sm: "", md: "none" } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: "30px", p: "4px" }}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: "60dvw",
                    p: 2,
                    backgroundColor: "background.paper",
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "end",
                      flexGrow: 1,
                    }}
                  >
                    <Button
                      variant="text"
                      onClick={toggleDrawer(false)}
                      size="small"
                      aria-label="button to toggle theme"
                      sx={{
                        minWidth: "32px",
                        height: "32px",
                        p: "4px",
                        borderRadius: "100%",
                      }}
                    >
                      <CloseRounded fontSize="small" />
                    </Button>
                  </Box>
                  {sections.map((section) => (
                    <MenuItem onClick={() => scrollToSection(section.dst)}>
                      {section.title}
                    </MenuItem>
                  ))}
                  <Divider />
                  <MenuItem>
                    <Button
                      color="primary"
                      variant="contained"
                      sx={{ width: "100%" }}
                      onClick={() => scrollToSection("contact")}
                    >
                      CONTACTER
                    </Button>
                  </MenuItem>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default AppAppBar;
