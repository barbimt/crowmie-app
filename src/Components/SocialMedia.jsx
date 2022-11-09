import {
  Box,
  CardActionArea,
  CardMedia,
  IconButton,
  Stack,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";
import logoCrowmie from "./../assets/logoCrowmie.png";
import { useData } from "../hooks/useData";

function SocialMedia() {
  const { promoterData } = useData();

  const buildNetworkItem = (icon, url) => {
    return (
      <IconButton size="large" color="primary" onClick={() => window.open(url)}>
        {icon}
      </IconButton>
    );
  };

  return (
    <Box sx={{ width: "50%", margin: "auto" }}>
      <Box sx={{ width: "30%", margin: "auto", marginBottom: "2rem" }}>
        <CardActionArea href="https://crowmie.com/" target={"_blank"}>
          <CardMedia component="img" image={logoCrowmie} height="80" />
        </CardActionArea>
      </Box>
      <Stack
        direction="row"
        alignItems="center"
        spacing={6}
        justifyContent="center"
      >
        {promoterData.networks.map((network) => {
          switch (network.name) {
            case "Instagram":
              return buildNetworkItem(
                <InstagramIcon sx={{ fontSize: "3rem" }} />,
                network.url
              
              );

            case "Telegram":
              return buildNetworkItem(
                <TelegramIcon sx={{ fontSize: "3rem" }} />,
                network.url
              );

            case "Linkedin":
              return buildNetworkItem(
                <LinkedInIcon sx={{ fontSize: "3rem" }} />,
                network.url
              );

            default:
              return <></>;
          }
        })}
      </Stack>
    </Box>
  );
}

export default SocialMedia;
