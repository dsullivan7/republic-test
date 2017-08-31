import React from 'react';

import {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const Character = ({ name, isAlive, title, culture, houses }) => (
  <TableRow>
    <TableRowColumn>{name}</TableRowColumn>
    <TableRowColumn>{title}</TableRowColumn>
    <TableRowColumn>{culture}</TableRowColumn>
    <TableRowColumn>{isAlive? 'Yes' : 'No' }</TableRowColumn>
    <TableRowColumn>{houses.join(', ')}</TableRowColumn>
  </TableRow>
);

export default Character
