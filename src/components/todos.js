import React from "react";
import { ListItemIcon, ListItemText, ListItem } from "@material-ui/core";
import RadioButtonUnchecked from "@material-ui/icons/RadioButtonUnchecked";
import { makeStyles } from "@material-ui/core/styles";

const tasks = [
  {
    id: 0,
    primary: "something",
    secondary: "something a bit longer",
  },
  {
    id: 2,
    primary: "MORE",
    secondary: "More about this topic",
  },
];

const useStyles = makeStyles(theme => ({
  title: {
    margin: theme.spacing(4, 0, 2),
    fontFamily: "Rajdhani",
    fontWeight: 600,
  },
}));

export default function Todos() {
  const classes = useStyles();

  return (
    <>
      {tasks.map(todo => (
        <ListItem key={todo.id}>
          <ListItemIcon>
            <RadioButtonUnchecked />
          </ListItemIcon>
          <ListItemText
            classes={
              ({ primary: classes.listItemText },
              { secondary: classes.listItemText })
            }
            primary={todo.primary}
            secondary={todo.secondary}
          />
        </ListItem>
      ))}
    </>
  );
}
