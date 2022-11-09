import { CardMedia, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ItemsInfo from "./../ItemsInfo";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { theme } from "../../assets/theme";
import { useData } from "../../hooks/useData";

function MainContent() {
  const { projectData } = useData();

  const InvertirButton = styled(Button)({
    fontWeight: 600,
    margin: "1rem 1rem 1rem 0",
    background:
      "linear-gradient(90deg, rgba(184,168,210,1) 32%, rgba(151,206,237,1) 100%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(184,168,210, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    transition: theme.transitions.create(["background", "transform"], {
      duration: theme.transitions.duration.standard,
    }),
    "&:hover": {
      background:
        "linear-gradient(90deg, rgba(198,185,219,1) 32%, rgba(171,215,240,1) 100%)",
      transform: "scale(1.1)",
    },
  });

  return (
    <>
      <Grid container spacing={2} sx={{alignItems: 'center'}}>
        <Grid item md={5}>
          <Box>
            <Typography variant="h1" color="primary">
              {projectData.name}
            </Typography>
            <Typography variant="h7">
              <ItemsInfo />
            </Typography>
            <Box sx>
              <InvertirButton>Invertir</InvertirButton>
              <Link
                onClick={() => window.open(projectData.eth_address_link)}
                target="_blank"
                // href={projectData.eth_address_link}
                component="button"
                variant="body2"
                underline="hover"
                sx={{
                  border: "solid",
                  borderRadius: "6px",
                  borderColor: "secondary.main",
                  padding: "10px",
                  fontSize: "1rem",
                  fontWeight: "700",
                  color: "secondary.main",
                }}
              >
                LINK BSC{" "}
              </Link>
            </Box>
          </Box>
        </Grid>
        <Grid item md={7} sm={10}>
          <CardMedia
            component="img"
            image={projectData.image}
            sx={{ marginTop: { md: "1.5rem", sm: "none" }, borderRadius: 4, boxShadow: "0 3px 5px 2px rgba(184,168,210, .3)" }}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default MainContent;
