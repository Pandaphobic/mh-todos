import React from "react";
import { ListItemIcon, ListItemText, ListItem } from "@material-ui/core";
import RadioButtonUnchecked from "@material-ui/icons/RadioButtonUnchecked";
import { makeStyles } from "@material-ui/core/styles";
import DeleteSharp from "@material-ui/icons/Delete";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  title: {
    margin: theme.spacing(4, 0, 2),
    fontFamily: "Rajdhani",
    fontWeight: 600,
  },
}));

export default function Todos({ todos, onDelete }) {
  const classes = useStyles();

  return (
    <>
      {todos.map(todo => (
        <ListItem key={todo.id}>
          <ListItemIcon>
            <IconButton>
              <RadioButtonUnchecked />
            </IconButton>
          </ListItemIcon>

          <ListItemText
            classes={
              ({ primary: classes.listItemText },
              { secondary: classes.listItemText })
            }
            primary={todo.title}
            secondary={todo.description}
          />
          <IconButton
            justify="center"
            aria-label="delete item"
            onClick={() => onDelete(todo.id)}
            // onClick={handleClickOpen}
          >
            <DeleteSharp size="small" />
          </IconButton>
        </ListItem>
      ))}
    </>
  );
}
