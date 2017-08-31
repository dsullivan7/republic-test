/* eslint-env jest */

import {fetchCharacter} from '../../src/clients/gotClient'

test('Content renders correctly', async () => {
  const payload = await fetchCharacter({name: 'Walder'})
  expect(payload.length).toEqual(1);
  expect(payload[0].name).toEqual('Walder');
});
