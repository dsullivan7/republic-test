import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Content from './containers/Content'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Content />
      </MuiThemeProvider>
    );
  }
}

export default  App;
