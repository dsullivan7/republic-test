/* eslint-env jest */

import React from 'react';
import {render} from 'enzyme';
import Content from '../src/containers/Content';

test('Content renders correctly', () => {
  const content = render(
    <Content />
  );

  content.find('Button').similate('click');
});
