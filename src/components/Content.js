import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
`;

const Content = ({ character, onSearchClick }) => (
  <Wrapper>
    <TextField hintText="Character Name" />
    <FlatButton onClick={onSearchClick} label="Search" />
    { character.name &&
      (<h1>{character.name}</h1>)
    }
  </Wrapper>
);

Content.propTypes = {
  character: PropTypes.object,
  onSearchClick: PropTypes.func.isRequired
};

export default Content;
