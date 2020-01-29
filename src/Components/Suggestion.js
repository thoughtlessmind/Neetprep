import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Box, Typography, IconButton } from "@material-ui/core";
import NewGoal from "./NewGoal";

const Suggestion = () => {
  const classes = useStyles();

  return (
    <Box>
      <Paper className={classes.sectionContainer}>
        <Typography variant="h5" className={classes.heading1}>
          Suggestions
        </Typography>

        <Box>
          <ul>
            <li>
              <Typography>Set reminders for different subjects</Typography>
            </li>
            <li>
              <Typography>Focus on one subject at a time</Typography>
            </li>
            <li>
              <Typography>Do attempt more practice and mock tests</Typography>
            </li>
            <li>
              <Typography>Set weekly revision reminders</Typography>
            </li>
            <li>
              <Typography>Give more time to organic chemistry</Typography>
            </li>
          </ul>
        </Box>
      </Paper>
      <NewGoal />
    </Box>
  );
};

const useStyles = makeStyles(theme => ({
  sectionContainer: {
    padding: "2% 4%",
    backgroundColor: "#e4fcfc"
  },
  heading1: {
    fontSize: "18px",
    paddingBottom: "2%"
    // paddingLeft: "2%"
  }
}));

export default Suggestion;
