import {useState, useEffect} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

import {TimeInput} from './time-input';
import {Delete} from './delete';
import {SmallTable} from './table';
import {SimpleAppBar} from './header';
import {EstimationResult} from './estimation-result'

const things = [
  {name: 'Documentation', estimation: 0},
  {name: 'Localisation', estimation: 0},
  {name: 'Legality', estimation: 0},
  {name: 'Security', estimation: 0},
  {name: 'Integration to the current system', estimation: 0},
  {name: 'Implementation of the code', estimation: 0},
  {name: 'Exception management', estimation: 0},
  {name: 'Unit tests', estimation: 0},
  {name: 'Integration tests', estimation: 0},
  {name: 'e2e tests', estimation: 0},
  {name: 'Manuel tests', estimation: 0},
  {name: 'Code review', estimation: 0},
  {name: 'Log Events', estimation: 0},
  {name: 'Metrics', estimation: 0},
  {name: 'Alarm', estimation: 0},
  {name: 'Tracing', estimation: 0},
  {name: 'Performance', estimation: 0},
  {name: 'Package', estimation: 0},
  {name: 'Deployment', estimation: 0},
  {name: 'UX', estimation: 0},
  {name: 'UI', estimation: 0},
  {name: 'Accessibility', estimation: 0},
];

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    marginTop: theme.spacing.unit * 3,
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: `${theme.spacing.unit * 3}px`,
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing.unit,
  },
  divider: {
    margin: `${theme.spacing.unit * 2}px 0`,
  },
});

function Home({classes}) {
  const [elements, setElements] = useState(things);

  function deleteElement(element) {
    const filteredElements = elements.filter(e => e.name !== element);
    setElements(filteredElements);
  }

  function addEstimation(element, estimation) {
    const lol = elements.map(e => {
      if (e.name === element) {
        e.estimation = estimation;
      }
      return e;
    });

    setElements(lol);
  }

  return (
    <div>
      <SimpleAppBar title="Estimation" />
      <div className={classes.container}>
        <div style={{gridColumnEnd: 'span 8'}}>
          <SmallTable
            things={elements}
            deleteElement={deleteElement}
            addEstimation={addEstimation}
          />
        </div>
        <div style={{gridColumnEnd: 'span 4'}}>
          <EstimationResult things={elements} />
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(Home);
