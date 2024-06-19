import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Button, TextField } from "@mui/material";

function Contact() {
  return (
    <Box
      id="contact"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: "white",
        bgcolor: "#06090a",
      }}
    >
      <Container
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: "100%", md: "60%" },
            textAlign: { sm: "left", md: "center" },
          }}
        >
          <Typography component="h2" variant="h4">
            Nous contacter
          </Typography>
          <Typography variant="body1" sx={{ color: "grey.400" }}>
            Sportif accompli ou bien simple curieux ? Un coach prendra contact
            avec vous pour vous accompagner dans la définition de vos besoins.
          </Typography>
          <Stack
            direction={{ xs: "column" }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: "100%", sm: "auto" } }}
          >
            <TextField
              id="outlined-basic"
              hiddenLabel
              size="small"
              variant="outlined"
              aria-label="Nom"
              placeholder="Nom"
              inputProps={{
                autoComplete: "off",
                "aria-label": "Nom",
              }}
            />
            <TextField
              id="outlined-basic"
              hiddenLabel
              size="small"
              variant="outlined"
              aria-label="Adresse mail"
              placeholder="Adresse mail"
              inputProps={{
                autoComplete: "off",
                "aria-label": "Adresse mail",
              }}
            />
            <TextField
              id="outlined-basic"
              hiddenLabel
              size="small"
              variant="outlined"
              aria-label="Message"
              placeholder="Mes attentes, mes envies"
              inputProps={{
                autoComplete: "off",
                "aria-label": "Message",
              }}
            />
            <Button variant="contained" color="primary">
              CONTACTEZ-MOI
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

export default Contact;
