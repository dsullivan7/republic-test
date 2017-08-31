/* eslint-env jest */

import React from 'react';
import {Provider} from 'react-redux';

import {mount} from 'enzyme';
import App from '../../src/App';
import configureStore from '../../src/store/configureStore';

let store;

beforeEach(()=>{
  store = configureStore();
})

test('Content renders correctly', () => {
  const app = mount(<Provider store={store}><App/></Provider>)

  app.find('FlatButton').simulate('click');
  expect(app.find('h1').text()).toEqual('MyName');
});
