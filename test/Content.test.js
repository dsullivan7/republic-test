/* eslint-env jest */

import React from 'react';
import PropTypes from 'prop-types';
import {mount} from 'enzyme';
import Content from '../src/containers/Content';
import configureStore from 'redux-mock-store';

import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme();

export const muiMountWithContext = node => mount(node, {
  context: { muiTheme },
  childContextTypes: { muiTheme: PropTypes.object },
});

const initialState = {}
const mockStore = configureStore()
let store

beforeEach(()=>{
  store = mockStore(initialState)
})

test('Content renders correctly', () => {
  const content = muiMountWithContext(<Content store={store} />)

  content.find('FlatButton').simulate('click');
});
