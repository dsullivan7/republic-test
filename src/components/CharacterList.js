import React from 'react';

import Paper from 'material-ui/Paper';
import styled from 'styled-components';

import Character from './Character'

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
} from 'material-ui/Table';

const StyledPaper = styled(Paper)`
  width: 100%;
`

const CharacterList = ({ characters }) => !characters.length? null : (
  <StyledPaper zDepth={2}>
    <Table selectable={false}>
      <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <TableRow>
          <TableHeaderColumn>Name</TableHeaderColumn>
          <TableHeaderColumn>Title</TableHeaderColumn>
          <TableHeaderColumn>Culture</TableHeaderColumn>
          <TableHeaderColumn>Alive</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {characters.map((character, idx) => (
            <Character key={idx}
              name={character.name}
              title={character.titles.length && character.titles[0]}
              culture={character.culture}
              isAlive={!(character.died)}
            />
        ))}
      </TableBody>
    </Table>
    </StyledPaper>
);

export default CharacterList
