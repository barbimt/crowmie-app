import { Box } from "@mui/system";
import React from "react";
import StatusTable from "./../StatusTable";
import FinancesTable from "./../FinancesTable";
import { Divider, Grid } from "@mui/material";
import CardMap from "./../CardMap";

function StatusAndMapSection() {

  return (
    <>
      <Box>
        <Grid container spacing={2} sx={{justifyContent: 'space-around'}}>
          <Grid item md={5} >
            <StatusTable />
          </Grid>
          <Grid item md={7} sm={10}>
            <CardMap />
          </Grid>
        </Grid>
        <FinancesTable /> 
        <Divider sx={{ margin: "2rem 0",  }} />
      </Box>
    
    </>
  );
}

export default StatusAndMapSection;
