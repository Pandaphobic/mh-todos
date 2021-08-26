import React from "react";
// MATERIAL UI
import { makeStyles } from "@material-ui/core/styles";
import RadioButtonUnchecked from "@material-ui/icons/RadioButtonUnchecked";

import {
  Container,
  List,
  Typography,
  ListItemIcon,
  ListItemText,
  ListItem,
  Grid,
} from "@material-ui/core";

// COMPONENTS
import TodoDialog from "./modal";

const useStyles = makeStyles(theme => ({
  title: {
    margin: theme.spacing(4, 0, 2),
    fontFamily: "Rajdhani",
    fontWeight: 600,
  },
}));

const items = {
  item1: ["primary text", "secondary text"],
  item2: ["primary text", "secondary text"],
  item3: ["primary text", "secondary text"],
  item4: ["primary text", "secondary text"],
  item5: ["primary text", "secondary text"],
};

export default function TodoList() {
  const classes = useStyles();
  // User for rendering secondary text
  const [secondary, setSecondary] = React.useState(false);

  return (
    <Container maxWidth="sm">
      <Grid
        container
        spacing={3}
        direction="row"
        alignItems="center"
        justify="center"
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

      <div>
        <List>
          <ListItem>
            <ListItemIcon>
              <RadioButtonUnchecked />
            </ListItemIcon>
            <ListItemText
              classes={
                ({ primary: classes.listItemText },
                { secondary: classes.listItemText })
              }
              primary="Title Text"
              secondary="Body Text"
            />
          </ListItem>
        </List>
      </div>
    </Container>
  );
}
