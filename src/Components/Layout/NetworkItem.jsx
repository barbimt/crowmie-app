import { IconButton } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function NetworkItem({ network }) {
  const getNetworkIcon = () => {
    switch (network.name) {
      case "Instagram":
        return <InstagramIcon sx={{ fontSize: "3rem" }} />;

      case "Telegram":
        return <TelegramIcon sx={{ fontSize: "3rem" }} />;

      case "Linkedin":
        return <LinkedInIcon sx={{ fontSize: "3rem" }} />;

      default:
        break;
    }
  };
  return (

      <IconButton color="primary" onClick={() => window.open(network.url)}>
        {getNetworkIcon()}
      </IconButton>

  );
}

export default NetworkItem;
