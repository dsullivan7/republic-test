import { connect } from 'react-redux';

import Content from '../components/Content';
import { searchCharacter, clearSearchCharacterError } from '../actions/app'

const mapStateToProps = (state) => ({
  characters: state.app.get('characters').toJS(),
  requestError: state.app.get('requestError'),
  houses: state.app.get('houses').toJS(),
  loading: state.app.get('loading'),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (data) => dispatch(searchCharacter(data)),
  errorDismissed: () => dispatch(clearSearchCharacterError())
});

const ContentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);

export default ContentContainer;
