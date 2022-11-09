import React from "react";
import map from "./../assets/map.jpg";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useData } from "../hooks/useData";

function CardMap() {
  const { projectData } = useData();
  return (
    <Card>
      <CardContent sx={{ backgroundColor: "secondary.light" }}>
        <Typography
          gutterBottom
          component="p"
          sx={{ fontSize: "14px", fontWeight: 500 }}
        >
          {projectData.address}
        </Typography>
      </CardContent>
      <CardMedia component="img" height="245" image={map} alt="green iguana" />
    </Card>
  );
}

export default CardMap;
