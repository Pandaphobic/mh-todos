import React from "react";
// MATERIAL UI
import { makeStyles } from "@material-ui/core/styles";
import Todos from "./todos";
import { Container, List, Typography, Grid } from "@material-ui/core";

// COMPONENTS
import TodoDialog from "./modal";

const useStyles = makeStyles(theme => ({
  title: {
    margin: theme.spacing(4, 0, 2),
    fontFamily: "Rajdhani",
    fontWeight: 600,
  },
}));

export default function TodoList({ todos, onDelete }) {
  const classes = useStyles();
  // User for rendering secondary text

  return (
    <Container maxWidth="sm">
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

        <Grid align="left" item xs={3}>
          <Typography variant="h6" className={classes.title}>
            <TodoDialog />
          </Typography>
        </Grid>
      </Grid>

      <>
        <List>
          <Todos todos={todos} onDelete={onDelete} />
        </List>
      </>
    </Container>
  );
}
