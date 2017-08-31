import React from 'react';

import {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const Character = ({ name, isAlive, title, culture }) => (
  <TableRow>
    <TableRowColumn>{name}</TableRowColumn>
    <TableRowColumn>{title}</TableRowColumn>
    <TableRowColumn>{culture}</TableRowColumn>
    <TableRowColumn>{isAlive? 'Yes' : 'No' }</TableRowColumn>
  </TableRow>
);

export default Character
