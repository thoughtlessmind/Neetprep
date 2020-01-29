import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Box,
  Grid,
  Typography,
  IconButton,
  Button
} from "@material-ui/core";
import { VictoryBar, VictoryGroup } from "victory";
import ShareIcon from "@material-ui/icons/Share";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

const Section2 = () => {
  const classes = useStyles();
  const [infoDialog, setInfoDialog] = useState(false);
  const [shareDialog, setShareDialog] = useState(false);

  const handleInfoDialog = () => {
    infoDialog ? setInfoDialog(false) : setInfoDialog(true);
  };

  const handleShareDialog = () => {
    shareDialog ? setShareDialog(false) : setShareDialog(true);
  };
  return (
    <Paper className={classes.sectionContainer}>
      <Box className={classes.headingContainer}>
        <Typography className={classes.heading1}>
          How much you have done
        </Typography>
        <IconButton className={classes.icon} onClick={handleInfoDialog}>
          <InfoOutlinedIcon fontSize="small" />
        </IconButton>

        <Dialog open={infoDialog} onClose={handleInfoDialog}>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              First bar indicates the goal you've set. <br />
              Second bar indicates how much you've achieved of it.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleInfoDialog}
              variant="contained"
              color="primary"
              className={classes.dialogButton}
            >
              Okay
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
      <Box>
        <Box className={classes.detailContainer}>
          <Typography className={classes.label}>Attempted</Typography>
          <Box className={classes.barContainer}>
            <VictoryGroup
              colorScale={["#0f4c75", "#52de97"]}
              offset={50}
              height={22}
              horizontal
            >
              <VictoryBar data={[{ x: "a", y: 5 }]} />
              <VictoryBar data={[{ x: "a", y: 4 }]} />
            </VictoryGroup>
          </Box>
        </Box>
        <Box className={classes.detailContainer}>
          <Typography className={classes.label}>Accuracy</Typography>
          <Box className={classes.barContainer}>
            <VictoryGroup
              colorScale={["#0f4c75", "#e13d3deb"]}
              offset={50}
              height={22}
              horizontal
            >
              <VictoryBar data={[{ x: "a", y: 20 }]} />
              <VictoryBar data={[{ x: "a", y: 12 }]} />
            </VictoryGroup>
          </Box>
        </Box>
        <Box className={classes.detailContainer}>
          <Typography className={classes.label}>Average Time</Typography>
          <Box className={classes.barContainer}>
            <VictoryGroup
              colorScale={["#0f4c75", "#e13d3deb"]}
              offset={50}
              height={22}
              horizontal
            >
              <VictoryBar data={[{ x: "a", y: 20 }]} />
              <VictoryBar data={[{ x: "a", y: 13 }]} />
            </VictoryGroup>
          </Box>
        </Box>
        <Box className={classes.detailContainer}>
          <Typography className={classes.label}>Study Hours</Typography>
          <Box className={classes.barContainer}>
            <VictoryGroup
              colorScale={["#0f4c75", "#2c7873"]}
              offset={50}
              height={22}
              horizontal
            >
              <VictoryBar data={[{ x: "a", y: 5 }]} />
              <VictoryBar data={[{ x: "a", y: 4.5 }]} />
            </VictoryGroup>
          </Box>
        </Box>
        <Box className={classes.detailContainer}>
          <Typography className={classes.label}>Lessons Completed</Typography>
          <Box className={classes.barContainer}>
            <VictoryGroup
              colorScale={["#0f4c75", "#e13d3deb"]}
              offset={50}
              height={22}
              horizontal
            >
              <VictoryBar data={[{ x: "a", y: 16 }]} />
              <VictoryBar data={[{ x: "a", y: 12 }]} />
            </VictoryGroup>
          </Box>
        </Box>
        <Box className={classes.shareIconContainer}>
          <IconButton className={classes.icon} onClick={handleShareDialog}>
            <ShareIcon fontSize="small" />
          </IconButton>

          <Dialog open={shareDialog} onClose={handleShareDialog}>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Share your result and progress with your <br /> friends and
                fellow learners
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={handleShareDialog}
                variant="contained"
                color="primary"
                className={classes.dialogButton}
              >
                Okay
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
      </Box>
    </Paper>
  );
};

const useStyles = makeStyles(theme => ({
  sectionContainer: {
    padding: "2% 4%",
    backgroundColor: "#e4fcfc",
    margin: "2% 0"
  },
  headingContainer: {
    paddingBottom: "10px",
    display: "flex",
    justifyContent: "space-between"
  },
  detailContainer: {
    display: "flex",
    padding: "1% 0"
  },
  barContainer: {
    marginTop: "auto",
    marginBottom: "auto"
  },
  heading1: {
    fontSize: "18px",
    paddingTop: "2%"
    // paddingLeft: "2%"
  },
  label: {
    fontSize: "15px",
    width: "50%",
    textAlign: "right"
  },
  shareIconContainer: {
    textAlign: "right"
  },
  icon: {
    padding: "",
    backgroundColor: "#e0edf6",
    color: "#2c7873",
    transition: "0.3s",
    boxShadow: "1px 1px 3px",
    "&:hover": {
      color: "#fff",
      backgroundColor: "#2c7873",
      boxShadow: "1px 1px 3px grey"
    }
  },
  iconBorder: {
    border: "none"
  },
  dialogButton: {
    backgroundColor: "#2c7873",
    "&:hover": {
      backgroundColor: "#2c9973"
    }
  }
}));

export default Section2;
