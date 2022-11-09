import { List, ListItemIcon, Divider } from "@mui/material";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import BoltIcon from "@mui/icons-material/Bolt";
import TokenIcon from "@mui/icons-material/Token";
import { withStyles } from "@material-ui/styles";

import React from "react";
import { useData } from "../hooks/useData";


function ItemsInfo() {
  const {projectData} = useData()
  const CustomListItem = withStyles({
    root: {
      display: "flex",
      alignItems: "center",
      color: "black",
      marginTop: "10px",
    },
  })(ListItemIcon);

  const projectInfo = [
    {
      id: "tokens",
      text: "Tokens emitidos:",
      value: projectData.tokens,
      icon: <TokenIcon color="secondary" />,
    },
    {
      id: "invesment",
      text: "Monto de inversión:",
      value: projectData.invesment,
      icon: <MonetizationOnIcon color="secondary" />,
    },
    {
      id: "energy_production",
      text: "Producción de energía:",
      value: projectData.energy_production,
      icon: <EnergySavingsLeafIcon color="secondary" />,
    },
    {
      id: "energy_power",
      text: "Potencia energética:",
      value: projectData.energy_power,
      icon: <BoltIcon color="secondary" />,
    },
  ];

  return (
    <div>
      <List>
        {projectInfo.map((info, index) => {
          return (
            <div key={index}>
              <CustomListItem >
                {info.icon}
                {info.text} {info.value}
              </CustomListItem>
              <Divider component="li" />
            </div>
          );
        })}
      </List>
    </div>
  );
}

export default ItemsInfo;
