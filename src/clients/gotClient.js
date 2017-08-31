import 'isomorphic-fetch'

const apiEndpoint = 'https://anapioficeandfire.com/api'
const characterPath = '/characters'

/**
 * returns a url to search characters
 * @param  {Object} parameters - an object of parameters to use in the character url
 * @return {String} - a url for querying
 */

const searchCharacterEndpoint = (parameters) =>
  `${apiEndpoint}${characterPath}?${Object.keys(parameters).map(key => `${key}=${parameters[key]}`).join('&')}&page=1&pageSize=1`

/**
 * returns a fetch promise to retrieve character payload
 * @param  {Object} parameters - an object of parameters to use in the character url
 * @return {Promise} - a fetch promise
 */
export const fetchCharacter = (parameters) => fetch(searchCharacterEndpoint(parameters)).then(res => res.json())
