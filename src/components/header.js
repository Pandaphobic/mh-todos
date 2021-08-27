import React from "react";
import { Typography, Grid } from "@material-ui/core";
import TodoDialog from "./todoModal";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  title: {
    margin: theme.spacing(4, 0, 2),
    fontFamily: "Rajdhani",
    fontWeight: 600,
  },
}));
export default function Header(onAddTodo) {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        spacing={3}
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Grid align="left" item xs={9}>
          <Typography variant="h5" className={classes.title}>
            Todo List
          </Typography>
        </Grid>

        <Grid align="right" item xs={3}>
          <Typography variant="h6" className={classes.title}>
            <TodoDialog onAddTodo />
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
