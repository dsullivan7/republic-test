import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Field, reduxForm} from 'redux-form';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

const Center = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  padding: 70px;
`

const renderTextField = ({input, meta, ...rest}) => (<TextField hintText="Character Name" {...input} {...rest} />)

const Content = ({ characters, handleSubmit }) => (
  <Container>
    <Center>
      <form onSubmit={handleSubmit}>
        <div>
          <Field name="name" component={renderTextField} />
        </div>
        <Center>
          <FlatButton type="submit" label="Search" />
        </Center>
      </form>
        { characters.length !== 0 &&
          (<h1>{characters[0].name}</h1>)
        }
    </Center>
  </Container>
);

Content.propTypes = {
  character: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'character_form',
})(Content);
