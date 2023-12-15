import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import SettingsIcon from "@mui/icons-material/Settings";
import GridViewIcon from "@mui/icons-material/GridView";
import KeyboardCommandKeyIcon from "@mui/icons-material/KeyboardCommandKey";
import GroupIcon from "@mui/icons-material/Group";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import CropIcon from "@mui/icons-material/Crop";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
const drawerWidth = 240;
import rasim from "./rasim.png";
import Chart from "./Chart.png";
import avatar from "./avatar.png";
import bell from "./bell.png";
import search from "./search.png";

import Notifications from "./Notifications.png";

import Chart2 from "./Chart2.png";
import Invite from "./Invite.png";
import Surcle from "./Surcle.png";
import Frame from "./Frame.png";
import Image from "next/image";
import { Container } from "@mui/material";
import MyLIne from "../Photo";
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ background: "#F9F9F9" }}>
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="div  "
            noWrap
            component={"div"}
            sx={{
              color: "black",
              display: "flex",
            }}
          >
            <div>
              <h4>Good Morning Anima</h4>
              <p
                style={{ fontSize: "10px", color: "gray", marginTop: "-20px" }}
              >
                Hope you have a good day
              </p>
            </div>
            <div style={{ marginLeft: "900px", display: "flex" }}>
              <div style={{ marginTop: "25px" }}>
                <Image src={search} alt="Picture of the author" />
                <Image
                  src={bell}
                  alt="Picture of the author"
                  style={{ marginLeft: "10px" }}
                />
              </div>
              <Image
                src={avatar}
                alt="Picture of the author"
                style={{ marginLeft: "10px", marginTop: "10px" }}
              />
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            background: "#F9F9F9",
            border: "0px solid ",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton
            sx={{ background: "#F9F9F9" }}
            onClick={handleDrawerClose}
          >
            {theme.direction === "ltr" ? (
              <Typography variant="div" component={"div"} sx={{}}>
                <Typography
                  variant="div"
                  component={"div"}
                  sx={{ marginLeft: "-280px", color: "#6956E5 " }}
                >
                  <CropIcon />
                  Teamify
                </Typography>
              </Typography>
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <List sx={{ color: "gray", marginLeft: "10px" }}>
          <ListItem
            disablePadding
            sx={{ color: "#6956E5", fontSize: "18px", fontWeight: "bold" }}
          >
            <ListItemButton>
              <GridViewIcon />
              <span style={{ marginLeft: "10px" }}>Dashboard</span>
              <ListItemText />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ marginTop: "10px" }}>
            <ListItemButton>
              <KeyboardCommandKeyIcon />
              <span style={{ marginLeft: "10px" }}>Teams</span>
              <ListItemText />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ marginTop: "10px" }}>
            <ListItemButton>
              <GroupIcon />
              <span style={{ marginLeft: "10px" }}>Employees</span>
              <ListItemText />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ marginTop: "10px" }}>
            <ListItemButton>
              <WorkOutlineIcon />
              <span style={{ marginLeft: "10px" }}>Projects</span>
              <ListItemText />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List sx={{ color: "gray", marginLeft: "10px" }}>
          <ListItem disablePadding sx={{ marginTop: "10px" }}>
            <ListItemButton>
              <LocalPhoneIcon />
              <span style={{ marginLeft: "10px" }}>Meetings</span>
              <ListItemText />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ marginTop: "10px" }}>
            <ListItemButton>
              <FolderOpenIcon />
              <span style={{ marginLeft: "10px" }}>Tasks</span>
              <ListItemText />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ marginTop: "10px" }}>
            <ListItemButton>
              <SettingsIcon />
              <span style={{ marginLeft: "10px" }}>Settings</span>
              <ListItemText />
            </ListItemButton>
          </ListItem>
          <br />
          <br />
          <Image src={rasim} alt="Picture of the author" />
        </List>
      </Drawer>

      <Container>
        <br />

        <Main open={open}>
          <DrawerHeader />
          <Typography paragraph sx={{ display: "flex" }}>
            <Typography variant="div" component={"div"}>
              <Typography
                variant="div"
                component={"div"}
                sx={{ color: "#23262F", gap: "10px", display: "flex" }}
              >
                <Typography
                  variant="div"
                  component={"div"}
                  sx={{
                    boxShadow: 1,
                    borderRadius: "3px",
                    background: "#F9F9F9",
                    padding: "25px",
                    width: "400px",
                    height: "344px",
                  }}
                >
                  <h4>Teams Strength</h4>
                  <Typography
                    variant="div"
                    component={"div"}
                    sx={{ marginLeft: "10px" }}
                  >
                    <Image src={Chart} alt="Picture of the author" />
                    <Image src={Chart2} alt="Picture of the author" />
                  </Typography>
                </Typography>
                <Typography
                  variant="div"
                  component={"div"}
                  sx={{
                    boxShadow: 1,
                    borderRadius: "3px",
                    background: "#F9F9F9",
                    padding: "25px",
                    width: "400px",
                    height: "344px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <h4>Employees</h4>
                    <p>Aug 25-Sept 25 </p>
                  </div>
                  <Typography
                    variant="div"
                    component={"div"}
                    sx={{ marginLeft: "10px" }}
                  >
                    <Image src={Invite} alt="Picture of the author" />
                    <Image
                      src={Surcle}
                      style={{ marginLeft: "10px" }}
                      alt="Picture of the author"
                    />
                  </Typography>
                </Typography>
              </Typography>
              <br />

              <Typography
                variant="div"
                component={"div"}
                sx={{
                  boxShadow: 1,
                  borderRadius: "3px",
                  background: "#F9F9F9",
                  padding: "25px",
                  width: "810px",
                  height: "400px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <h4>Project Deliveries</h4>
                  <Image src={Frame} alt="Picture of the author" />
                </div>
                <Typography
                  variant="div"
                  component={"div"}
                  sx={{ marginTop: "-20px", height: "320px" }}
                >
                  <MyLIne />
                </Typography>
              </Typography>
            </Typography>
            <Typography
              variant="div"
              component={"div"}
              sx={{ marginLeft: "30px" }}
            >
              <Typography
                variant="div"
                component={"div"}
                sx={{
                  width: "298px",
                  textAlign: "center",
                  background: "#FFF0E6",
                  padding: "1px",
                  borderRadius: "10px",
                }}
              >
                <h3>Top 10</h3>
                <p style={{ marginTop: "-20px", fontWeight: "bolder" }}>
                  Position in dribbble
                </p>
                <p style={{ marginTop: "-20px", color: "gray" }}>
                  20% Increase from Last Week
                </p>
              </Typography>
              <br />
              <Typography
                variant="div"
                component={"div"}
                sx={{
                  width: "298px",
                  textAlign: "center",
                  background: "#ECEAFE",
                  padding: "1px",
                  borderRadius: "10px",
                }}
              >
                <h3>26</h3>
                <p style={{ marginTop: "-20px", fontWeight: "bolder" }}>
                  New employees onboarded
                </p>
                <p style={{ marginTop: "-20px", color: "gray" }}>
                  15% Increase from Last Month
                </p>
              </Typography>
              <br />{" "}
              <Typography
                variant="div"
                component={"div"}
                sx={{
                  width: "298px",
                  textAlign: "center",
                  background: "#E5F7FF",
                  padding: "1px",
                  borderRadius: "10px",
                }}
              >
                <h3>500</h3>
                <p style={{ marginTop: "-20px", fontWeight: "bolder" }}>
                  New Clients Approached
                </p>
                <p style={{ marginTop: "-20px", color: "gray" }}>
                  5% Increase from Last Week
                </p>
              </Typography>
              <br />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3>Notifications</h3>
                <p style={{ color: "#6956E5" }}>View All</p>
              </div>
              <Image src={Notifications} alt="Picture of the author" />
            </Typography>
          </Typography>
        </Main>
      </Container>
    </Box>
  );
}
