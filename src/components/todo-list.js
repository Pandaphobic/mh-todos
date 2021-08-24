import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FolderIcon from "@material-ui/icons/Folder";
import {
  Container,
  List,
  Typography,
  ListItemIcon,
  ListItemText,
  ListItem,
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  demo: {
    backgroundColor: theme.palette.background.paper,
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
      <Typography variant="h6" className={classes.title}>
        Todo List
      </Typography>
      <div className={classes.demo}>
        <List>
          {generate(
            <ListItem>
              <ListItemIcon>
                <FolderIcon />
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
          )}
        </List>
      </div>
    </Container>
  );
}
