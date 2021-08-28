import React from "react"
import PropTypes from "prop-types"
import { List, ListItem, ListItemText, DialogTitle, Dialog, Typography, Container } from "@material-ui/core/"
import PlusIcon from "@material-ui/icons/Add"
import IconButton from "@material-ui/core/IconButton"
import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import { useEffect } from "react"

const useStyles = makeStyles(theme => ({
  palette: {
    type: "dark"
  },
  modalTitle: {
    fontFamily: "Rajdhani",
    fontWeight: 600,
    fontSize: "1em"
  },
  root: {
    "& > *": {
      marginTop: "1.5em",
      marginLeft: "2em",
      marginRight: "2em",
      marginBottom: "1em",
      width: "85%"
    }
  }
}))

function Modal({ onClose, selectedValue, open, onAddTodo }) {
  const classes = useStyles()
  const [todoTitle, setTodoTitle] = useState("")
  const [todoDesc, setTodoDesc] = useState("")

  const [newTodo, setNewTodo] = useState({
    id: uuidv4(),
    title: "",
    description: ""
  })

  useEffect(() => {
    setNewTodo({ id: uuidv4(), title: todoTitle, description: todoDesc })
  }, [todoTitle, todoDesc])

  const handleClose = () => {
    onClose(selectedValue)
  }

  const addBtnClicked = () => {
    onAddTodo(newTodo)
    onClose(selectedValue)
  }

  return (
    <Dialog onClose={handleClose} aria-labelledby="add-todo-title" open={open}>
      <List>
        <DialogTitle id="add-todo-title">
          <Typography className={classes.modalTitle}>Add New Todo Item</Typography>
        </DialogTitle>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField onChange={e => setTodoTitle(e.target.value)} color="secondary" id="title" label="Title" value={todoTitle} />
          <TextField onChange={e => setTodoDesc(e.target.value)} color="secondary" id="description" label="Description" value={todoDesc} />
        </form>
        <Container>
          <ListItem autoFocus button width="85%" onClick={addBtnClicked}>
            <ListItemText align="center" primary="Add" />
          </ListItem>
        </Container>
      </List>
    </Dialog>
  )
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string
}

export default function TodoDialog({ onAddTodo }) {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = value => {
    setOpen(false)
  }

  return (
    <div>
      <IconButton justify="center" aria-label="add item" onClick={handleClickOpen}>
        <PlusIcon />
      </IconButton>
      <Modal open={open} onClose={handleClose} onAddTodo={onAddTodo} />
    </div>
  )
}
