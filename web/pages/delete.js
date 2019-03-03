import {withStyles} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function DeleteBefore({classes, deleteElement}) {
  return (
    <IconButton onClick={deleteElement} className={classes.button} aria-label="Delete">
      <DeleteIcon />
    </IconButton>
  );
}

export const Delete = withStyles(styles)(DeleteBefore);
