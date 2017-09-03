import 'isomorphic-fetch'

const apiEndpoint = 'https://anapioficeandfire.com/api'
const characterPath = '/characters'
const housePath = '/houses'

/**
 * returns a url to search characters
 * @param  {Object} parameters - an object of parameters to use in the character url
 * @return {String} - a url for querying
 */

const searchCharacterEndpoint = (parameters) =>
  `${apiEndpoint}${characterPath}?${Object.keys(parameters).map(key => `${key}=${parameters[key]}`).join('&')}&page=1&pageSize=10`

/**
 * returns a fetch promise to retrieve character payload
 * @param  {Object} parameters - an object of parameters to use in the character url
 * @return {Promise} - a fetch promise
 */
export const fetchCharacter = (parameters) => fetch(searchCharacterEndpoint(parameters)).then(res => res.json())

/**
 * returns a fetch promise to retrieve house payload
 * @param  {Integer} id - an id of the house to look up
 * @return {Promise} - a fetch promise
 */
export const fetchHouse = (id) => fetch(`${apiEndpoint}${housePath}/${id}`).then(res => res.json())
