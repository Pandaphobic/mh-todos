import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(() => ({
  root: {
    "& > *": {
      margin: "2em",
      width: "85%",
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField color="secondary" id="standard-basic" label="Title" />
      <TextField color="secondary" id="standard-basic" label="Description" />
    </form>
  );
}
