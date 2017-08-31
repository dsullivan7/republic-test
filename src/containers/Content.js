import { connect } from 'react-redux';

import Content from '../components/Content';
import { searchCharacter } from '../actions/app'

const mapStateToProps = (state) => ({
  characters: state.app.get('characters').toJS(),
  houses: state.app.get('houses').toJS(),
  loading: state.app.get('loading'),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (data) => dispatch(searchCharacter(data))
});

const ContentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);

export default ContentContainer;
