import React from 'react';
import styled from 'styled-components';

import {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const NoWrap = styled.div`
  word-wrap: break-word;
  white-space: normal;
`;

const Character = ({ name, isAlive, title, culture, houses }) => (
  <TableRow>
    <TableRowColumn><NoWrap>{name}</NoWrap></TableRowColumn>
    <TableRowColumn><NoWrap>{title}</NoWrap></TableRowColumn>
    <TableRowColumn><NoWrap>{culture}</NoWrap></TableRowColumn>
    <TableRowColumn><NoWrap>{isAlive? 'Yes' : 'No' }</NoWrap></TableRowColumn>
    <TableRowColumn><NoWrap>{houses.join(', ')}</NoWrap></TableRowColumn>
  </TableRow>
);

export default Character
