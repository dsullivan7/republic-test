import { connect } from 'react-redux';

import Content from '../components/Content';


const mapStateToProps = () => {
  return {}
};

const mapDispatchToProps = () => {
  return {
    onSearchClick: () => {
      console.log('This has been clicked!');
    }
  }
};

const ContentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);

export default ContentContainer;
