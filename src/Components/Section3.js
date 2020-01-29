import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Box, Grid, Typography, IconButton } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Section3 = () => {
  const classes = useStyles();

  return (
    <Box>
      <Paper className={classes.sectionContainer}>
        <Box>
          <Typography className={classes.heading1}>Result Analysis</Typography>
        </Box>

        <Typography className={classes.text}>
          This was your first test and your result is better than average.
        </Typography>

        <Paper
          style={{
            padding: "2% 3%",
            margin: "2% 2%",
            backgroundColor: "#e4fcfc"
          }}
        >
          <Typography>Strong Points</Typography>
          <Box>
            <ul>
              <li>
                <Typography className={classes.text}>
                  You've tried to attempt maximum questions
                </Typography>
              </li>
              <li>
                <Typography className={classes.text}>
                  You didn't compromised with study time
                </Typography>
              </li>
            </ul>
          </Box>
        </Paper>
        <Paper
          style={{
            padding: "2% 3%",
            backgroundColor: "#4aa1db3a",
            margin: "2% 2%"
          }}
        >
          <Typography>Need Improvements</Typography>
          <Box>
            <ul>
              <li>
                <Typography className={classes.text}>
                  Your accuracy rate is not so good, it is beacuse you're trying
                  to attempt question
                </Typography>
              </li>
              <li>
                <Typography className={classes.text}>
                  You studied adequate hours but could'nt complete the required
                  lessons
                </Typography>
              </li>
              <li>
                <Typography className={classes.text}>
                  Your average time per question is too long.
                </Typography>
              </li>
            </ul>
          </Box>
        </Paper>
      </Paper>

      <Paper className={classes.sectionContainer} style={{ padding: "6%" }}>
        <Typography>
          See suggestions for next goal
          <Link to="/suggestion">
            <IconButton className={classes.icon}>
              <ChevronRightIcon />
            </IconButton>
          </Link>
        </Typography>
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
  heading1: {
    fontSize: "19px",
    paddingTop: "2%"
    // paddingLeft: "2%"
  },
  text: {
    fontSize: "14px"
  },
  icon: {
    padding: "1%",
    margin: "0 2%",
    backgroundColor: "#e0edf6",
    color: "#2c7873",
    transition: "0.3s",
    boxShadow: "1px 1px 3px",
    "&:hover": {
      color: "#fff",
      backgroundColor: "#2c7873",
      boxShadow: "1px 1px 3px grey"
    }
  }
}));

export default Section3;
