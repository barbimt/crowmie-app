import { Box, CardActionArea, CardMedia, Stack } from "@mui/material";
import React from "react";
import logoCrowmie from "./../assets/logoCrowmie.png";
import { useData } from "../hooks/useData";
import NetworkItem from "./Layout/NetworkItem";

function SocialMedia() {
  const { promoterData } = useData();

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
        alignContent="center"
        spacing={6}
        justifyContent="center"
      >
        {promoterData.networks.map((network) => {
          return network.name !== "Website" ? (
            <NetworkItem key={network.name} network={network} />
          ) : (
            <></>
          );
        })}
      </Stack>
    </Box>
  );
}

export default SocialMedia;
