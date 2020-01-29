import React from "react";
import { Box, Grid, Typography, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";

const Appbar = () => {
  const classes = useStyles();
  return (
    <Box style={{ display: "flex" }}>
      <IconButton className={classes.menuIcon}>
        <MenuIcon />
      </IconButton>

      <Typography variant="h5" className={classes.heading}>
        Report
      </Typography>
    </Box>
  );
};

const useStyles = makeStyles(theme => ({
  menuIcon: {
    padding: "",
    color: "#2c7873",
    transition: "0.3s",
    "&:hover": {
      color: "#fff",
      backgroundColor: "#2c7873"
    }
  },
  heading: {
    paddingTop: "5px",
    fontSize: "24px"
  }
}));

export default Appbar;
