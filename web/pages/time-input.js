import {withStyles} from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    width: '100%',
    margin: theme.spacing.unit,
  },
});

function TimeInputBefore({classes, name, addEstimation, estimation}) {
  return (
    <div className={classes.container}>
      <Input
        onBlur={e => {
          addEstimation(name, Math.round(event.target.value));
        }}
        type={'number'}
        defaultValue={estimation}
        className={classes.input}
        inputProps={{
          'aria-label': 'Description',
        }}
      />
    </div>
  );
}

export const TimeInput = withStyles(styles)(TimeInputBefore);
