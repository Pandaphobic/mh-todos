import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(() => ({
  root: {
    "& > *": {
      marginTop: "1.5em",
      marginLeft: "2em",
      marginRight: "2em",
      marginBottom: "1em",
      width: "85%",
    },
  },
  textField: {
    fontFamily: "Rajdhani",
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        className={classes.textField}
        color="secondary"
        id="standard-basic"
        label="Title"
      />
      <TextField color="secondary" id="standard-basic" label="Description" />
    </form>
  );
}
