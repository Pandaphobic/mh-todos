import React from "react";
import PropTypes from "prop-types";
import {
  List,
  ListItem,
  ListItemText,
  DialogTitle,
  Dialog,
  Typography,
} from "@material-ui/core/";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";

// COMPONENTS
import BasicTextFields from "./input-field";

const useStyles = makeStyles(theme => ({
  palette: {
    type: "dark",
  },
  modalTitle: {
    fontFamily: "Rajdhani",
    fontWeight: 600,
  },
}));

function Modal(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = value => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="add-todo-title" open={open}>
      <List>
        <DialogTitle id="add-todo-title">
          <Typography variant="h5" className={classes.modalTitle}>
            Add New Todo Item
          </Typography>
        </DialogTitle>
        <BasicTextFields />
        <ListItem
          autoFocus
          button
          width="85%"
          onClick={() => handleListItemClick("addAccount")}
        >
          <ListItemText align="center" primary="Add" />
        </ListItem>
      </List>
    </Dialog>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function TodoDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = value => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton
        justify="center"
        aria-label="add item"
        onClick={handleClickOpen}
      >
        <AddIcon />
      </IconButton>
      <Modal
        // selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
