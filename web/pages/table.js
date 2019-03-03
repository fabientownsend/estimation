import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import {Delete} from './delete';
import {TimeInput} from './time-input';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

let id = 0;
function createData(name, estimation) {
  id += 1;
  return {id, name, estimation};
}

function SimpleTable(props) {
  const {classes, things, deleteElement, addEstimation} = props;
  const rows = things.map(e => createData(e.name, e.estimation));

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="left">Requirement</TableCell>
            <TableCell align="center">Estimation (minutes)</TableCell>
            <TableCell align="center" />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">
                <TimeInput
                  name={row.name}
                  estimation={row.estimation}
                  addEstimation={addEstimation}
                />
              </TableCell>
              <TableCell align="center">
                <Delete
                  deleteElement={() => {
                    deleteElement(row.name);
                  }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export const SmallTable = withStyles(styles)(SimpleTable);
