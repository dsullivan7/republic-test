import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Field, reduxForm} from 'redux-form';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import CircularProgress from 'material-ui/CircularProgress';

import CharacterList from './CharacterList'

const Center = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const AppWrapper = styled.div`
  padding: 70px;
`

const Entry = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
`

const ResultsWrapper = styled.div`
  width: 100%;
`

const renderTextField = ({input, meta, ...rest}) => (<TextField hintText="Character Name" {...input} {...rest} />)

const Content = ({ characters, houses, loading, handleSubmit, requestError, errorDismissed }) => (
  <AppWrapper>
    <Dialog
        title="Error"
        modal={false}
        open={requestError}
        onRequestClose={errorDismissed}
    >
      There was an error processing the request
    </Dialog>
    <Center>
      <form onSubmit={handleSubmit}>
        <Entry>
          <Field name="name" component={renderTextField} />
        </Entry>
        <Center>
          <Entry>
              <FlatButton type="submit" label="Search" />
          </Entry>
        </Center>
      </form>
      <ResultsWrapper>
        <Entry>
          <Center>
            { loading? <CircularProgress size={120} thickness={6} /> : <CharacterList houses={houses} characters={characters} /> }
          </Center>
        </Entry>
      </ResultsWrapper>
    </Center>
  </AppWrapper>
);

Content.propTypes = {
  characters: PropTypes.array.isRequired,
  requestError: PropTypes.bool.isRequired,
  errorDismissed: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'character_form',
})(Content);
