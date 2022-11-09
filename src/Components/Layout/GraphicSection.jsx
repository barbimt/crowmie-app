import { Box, Divider, Grid } from "@mui/material";
import React from "react";
import Graph from "../Graph";
import Subtitle from "../Subtitle";
import TableGraph from "../TableGraph";

function GraphicSection() {
  return (
    <>
      <Subtitle text={"Gráfico de Generación de Energía"} />
      <Box sx={{margin: '2rem 0'}}>
        <Grid container spacing={2}  sx={{justifyContent: 'space-between'}}>
        <Grid  md={5}  >
            <Graph />
        </Grid>
          <Grid  md={7} sx={{paddingLeft: '50px'}} >
            <TableGraph />
          </Grid>
        </Grid>
        <Divider sx={{ margin: "2rem 0",  }} />
      </Box>
    </>
  );
}

export default GraphicSection;
