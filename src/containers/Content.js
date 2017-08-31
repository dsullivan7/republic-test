import { connect } from 'react-redux';

import Content from '../components/Content';
import { searchCharacter } from '../actions/app'

const mapStateToProps = (state) => ({
  characters: state.app.get('characters').toJS()
});

const mapDispatchToProps = (dispatch) => ({
  onSearchClick: () => dispatch(searchCharacter({name: 'Walder'}))
});

const ContentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);

export default ContentContainer;
