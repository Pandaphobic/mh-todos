import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import RadioButtonChecked from "@material-ui/icons/RadioButtonChecked";
import RadioButtonUnchecked from "@material-ui/icons/RadioButtonUnchecked";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import logo from "../assets/logo.svg";
import {
  Container,
  List,
  Typography,
  ListItemIcon,
  ListItemText,
  ListItem,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  palette: {
    type: "dark",
  },
  title: {
    margin: theme.spacing(4, 0, 2),
    fontFamily: "Rajdhani",
    fontWeight: 600,
  },
  listItemText: {
    fontFamily: "Rajdhani",
  },
}));

const items = {
  item1: ["primary text", "secondary text"],
  item2: ["primary text", "secondary text"],
  item3: ["primary text", "secondary text"],
  item4: ["primary text", "secondary text"],
  item5: ["primary text", "secondary text"],
};

function generate(element) {
  return [0, 1, 2].map(value =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

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
          <Typography variant="h6" className={classes.title}>
            Todo List
          </Typography>
        </Grid>

        <Grid align="left" item xs={3}>
          <Typography variant="h6" className={classes.title}>
            <IconButton justify="center" aria-label="delete">
              <AddIcon />
            </IconButton>
          </Typography>
        </Grid>
      </Grid>

      <div className={classes.demo}>
        <List>
          <ListItem>
            <ListItemIcon>
              <RadioButtonChecked />
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
