import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Box, Typography, IconButton } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';


const NewGoal  = () =>{
  
  const classes = useStyles()
  return(
    <Paper className={classes.sectionContainer}>
      <Typography variant="h5" className={classes.heading1}>
        Create New Goal
        <IconButton className={classes.icon}>
          <AddIcon/>
        </IconButton >
      </Typography>
    </Paper>
  )
}

const useStyles = makeStyles(theme =>({
  sectionContainer: {
    padding: "2% 4%",
    backgroundColor: "#e4fcfc",
    margin: "2% 0"
  },
  heading1: {
    fontSize: "20px",
    padding: "2%"
    // paddingLeft: "2%"
  },
  icon: {
    padding: "1%",
    margin: '0 2%',
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
}))

export default NewGoal