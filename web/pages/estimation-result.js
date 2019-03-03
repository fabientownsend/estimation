import {useState} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  card: {
    marginTop: theme.spacing.unit * 3,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function EstimationResultBefore(props) {
  const {classes} = props;
  const [idealHour, setIdealHour] = useState(0);

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Ideal Hours Result
        </Typography>
        <Typography className={classes.pos} component="p" color="textSecondary">
          ideal hours = total minutes / 1 ideal hour
        </Typography>
        <Typography component="p">
          Estimation remaining:{' '}
          {props.things.length -
            props.things.filter(e => e.estimation !== 0).length}
        </Typography>
        <Typography component="p" />
        <IdealHours setIdealHour={setIdealHour} elements={props.things} />
        <FibonacciProposition idealHour={idealHour} />
      </CardContent>
    </Card>
  );
}

function FibonacciProposition(props) {
  function closest(idealHour) {
    const fibonacci = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55];
    const twoClosest = [];
    if (fibonacci.includes(idealHour)) {
      twoClosest.push(idealHour);
    }

    let min = idealHour - 1;
    let max = idealHour + 1;
    while (twoClosest.length < 2) {
      if (fibonacci.includes(max)) {
        twoClosest.push(max);
      } else if (fibonacci.includes(min)) {
        twoClosest.push(min);
      }
      min -= 1;
      max += 1;
    }

    return twoClosest.join(', ');
  }

  if (props.idealHour) {
    return <Typography component="p">Finocca proposed: {closest(props.idealHour)}</Typography>;
  } else {
    return null;
  }
}

function IdealHours(props) {
  const {classes} = props;
  function hidealHours(e) {
    let total = 0;
    for (let {estimation} of e) {
      console.log(estimation);
      total += estimation;
    }
    const result = Math.round(total / 60);
    props.setIdealHour(result);
    return result;
  }

  if (
    props.elements.every(e => e.estimation !== 0) &&
    props.elements.length !== 0
  ) {
    return (
      <Typography component="p">
        Ideal Hours: {hidealHours(props.elements)}
      </Typography>
    );
  } else {
    return null;
  }
}

export const EstimationResult = withStyles(styles)(EstimationResultBefore);
