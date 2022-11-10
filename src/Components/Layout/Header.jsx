import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import logo from "../../assets/logoColor.png";
import { CardMedia } from "@mui/material";
import { useLanguage } from "../../hooks/useLanguage";

const drawerWidth = 240;
const navItems = ["ES", "EN"];

function Header(props) {
  const { language, onLanguageSelected } = useLanguage();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ padding: 1 }}
      >
        <CardMedia
          component="img"
          sx={{ width: "85%" }}
          image={logo}
          alt="Crowmie"
        />
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              onClick={() => onLanguageSelected(item)}
              sx={{ textAlign: "center" }}
            >
              <ListItemText
                sx={{ color: "#b8a8d2" }}
                primary={item}
                selected={language === item.toLowerCase()}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar sx={{ backgroundColor: "#f5f5f5" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              width: "50%",
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: "150px" }}
              image={logo}
              alt="Crowmie"
            />
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                disabled={language === item.toLowerCase()}
                onClick={() => onLanguageSelected(item)}
                key={item}
                color="primary"
                size="medium"
                variant="contained"
                sx={{ mr: "10px", fontWeight: 700, color: "white" }}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Header;
