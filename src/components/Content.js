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

const Content = ({ characterPayload, onSearchClick }) => (
  <Wrapper>
    <TextField hintText="My Hint Text" />
    <FlatButton onClick={onSearchClick} label="Search" />
  </Wrapper>
);

Content.propTypes = {
  character: PropTypes.object,
  onSearchClick: PropTypes.func.isRequired
};

export default Content;
