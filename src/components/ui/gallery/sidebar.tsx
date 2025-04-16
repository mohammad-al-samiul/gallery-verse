"use client";

import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";

const drawerWidth = 240;

export default function Sidebar() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      open
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          position: "fixed",
          top: 64, // navbar height
          left: 0,
          height: "calc(100vh - 64px)",
          zIndex: (theme) => theme.zIndex.appBar - 1,
          backgroundColor: isDark ? "#1e1e1e" : "#ffffff",
          color: isDark ? "#ffffff" : "#000000",
        },
      }}
    >
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon sx={{ color: "inherit" }}>
              <PhotoLibraryIcon />
            </ListItemIcon>
            <Link href={"/gallery"}>
              <ListItemText primary="Gallery" />
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </Drawer>
  );
}
