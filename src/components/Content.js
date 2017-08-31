import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Field, reduxForm} from 'redux-form';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import CircularProgress from 'material-ui/CircularProgress';

import CharacterList from './CharacterList'

const Center = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  padding: 70px;
`

const Component = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
`

const ResultsWrapper = styled.div`
  width: 100%;
`

const renderTextField = ({input, meta, ...rest}) => (<TextField hintText="Character Name" {...input} {...rest} />)

const Content = ({ characters, loading, handleSubmit }) => (
  <Container>
    <Center>
      <form onSubmit={handleSubmit}>
        <Component>
          <Field name="name" component={renderTextField} />
        </Component>
        <Center>
          <Component>
              <FlatButton type="submit" label="Search" />
          </Component>
        </Center>
      </form>
      <ResultsWrapper>
        <Center>
          { loading? <CircularProgress size={120} thickness={6} /> : <CharacterList characters={characters} /> }
        </Center>
      </ResultsWrapper>
    </Center>
  </Container>
);

Content.propTypes = {
  characters: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'character_form',
})(Content);
