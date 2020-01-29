import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Box, Typography } from "@material-ui/core";
import { VictoryPie } from "victory";


const Score = () => {
  const classes = useStyles();

  return (
    <Box>
      <Paper className={classes.sectionContainer}>
        <Box>
          <Typography variant="h5" className={classes.heading1}>
            Result
          </Typography>
          <Box className={classes.container1}>
            <Box className={classes.pieContainer}>
              <Box className={classes.pieSvgContainer}>
                <VictoryPie
                  labels={[""]}
                  width={50}
                  radius={12}
                  colorScale={["#2c7873", "#fff"]}
                  height={25}
                  data={[{ y: 70 }, { y: 20 }]}
                />
              </Box>
              <Typography className={classes.pieLabel}>Attempted</Typography>
            </Box>
            <Box>
              <Box className={classes.pieSvgContainer}>
                <VictoryPie
                  labels={[""]}
                  width={50}
                  radius={12}
                  colorScale={["#e13d3deb", "white"]}
                  height={25}
                  data={[{ y: 20 }, { y: 8 }]}
                />
              </Box>
              <Typography className={classes.pieLabel}>Accuracy</Typography>
            </Box>
            <Box>
              <Box className={classes.pieSvgContainer}>
                <VictoryPie
                  labels={[""]}
                  width={50}
                  radius={12}
                  colorScale={["#2c7873", "white"]}
                  height={25}
                  data={[{ y: 20 }, { y: 7 }]}
                />
              </Box>
              <Typography className={classes.pieLabel}>Average Time</Typography>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

const useStyles = makeStyles(theme => ({
  sectionContainer: {
    padding: "2% 4%",
    backgroundColor: "#e4fcfc",
    margin: "2% 0"
  },
  container1: {
    background: "#e4fcfc",
    height: "auto",
    display: "flex",
    justifyContent: "space-around"
  },
  pieSvgContainer: {
    width: "80px"
  },
  heading1: {
    fontSize: "18px",
    paddingBottom: "2%"
    // paddingLeft: "2%"
  },
  pieLabel: {
    fontSize: "15px"
  },
  pieContainer: {
    textAlign: "center"
  }
}));

export default Score;
