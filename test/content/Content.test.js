/* eslint-env jest */

import 'babel-polyfill'

import React from 'react';
import {Provider} from 'react-redux';
import {mount} from 'enzyme';

import App from '../../src/App';
import configureStore from '../../src/store/configureStore';

// mocking
import * as gotClient from '../../src/clients/gotClient'
gotClient.fetchCharacter = jest.fn(() => [{name: 'GOT Character Name'}])

let store;

beforeEach(()=> {
  store = configureStore();
})

test('Content renders correctly', () => {
  const app = mount(<Provider store={store}><App/></Provider>)

  app.find('FlatButton').simulate('submit');
  expect(app.find('h1').text()).toEqual('GOT Character Name');
});
