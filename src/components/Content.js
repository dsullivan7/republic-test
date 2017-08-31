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

const Content = ({ characters, onSearchClick }) => (
  <Wrapper>
    <TextField hintText="Character Name" />
    <FlatButton onClick={onSearchClick} label="Search" />
    { characters.length !== 0 &&
      (<h1>{characters[0].name}</h1>)
    }
  </Wrapper>
);

Content.propTypes = {
  character: PropTypes.object,
  onSearchClick: PropTypes.func.isRequired
};

export default Content;
