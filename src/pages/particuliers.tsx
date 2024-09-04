import { alpha, Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const logoStyle = {
  width: "280px",
  height: "auto",
  cursor: "pointer",
};

function Particuliers() {
  const navigate = useNavigate();

  return (
    <Box
      id="hero"
      sx={{
        width: "100%",
        minHeight: "50%",
        display: "flex",
        backgroundImage: `linear-gradient(#000, ${alpha("#690000", 0.0)})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "fit",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
          gap: 4,
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Box sx={{ height: "100%" }} />
        <h1>
          <Typography
            component="h1"
            variant="h1"
            fontWeight="bold"
            sx={{
              fontSize: "clamp(3rem, 10vw, 3.4rem)",
              textAlign: "center",
              color: "primary.light",
            }}
          >
            La salle de sport qui vient à toi.
          </Typography>
        </h1>
        <Typography
          textAlign="center"
          color="text.secondary"
          sx={{ alignSelf: "center", width: { sm: "100%", md: "80%" } }}
        >
          En construction ! 😉
        </Typography>
        <Button
          variant="text"
          sx={{ borderRadius: "999px" }}
          onClick={() => navigate("/")}
        >
          <img
            src="/logos/Full - Long - Skull - Fond noir.svg"
            style={logoStyle}
            alt="logo fit on the road"
          />
        </Button>
      </Container>
    </Box>
  );
}

export default Particuliers;
