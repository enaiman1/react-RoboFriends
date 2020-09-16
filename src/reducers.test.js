import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED,
  } from "./constants";

  import * as reducers from './reducers'
  import './setupTest'
  

const initialStateSearch = {
  searchField: ''
}
describe('searchRobots reducer', () => {
  it('should return the initial state', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual(
      {
        searchField: ""
      }
    )
  })

  it('should handle CHANGE_SEARCH_FIELD', () => {
    expect(
      reducers.searchRobots(initialStateSearch, {
        type: CHANGE_SEARCH_FIELD,
        payload: 'abc'
      })
    ).toEqual(
      {
        searchField: "abc"
      }
    )
  })
})


describe('requestRobots reducer', () => {
const initialStateRobots = {
  isPending: true,
  robots: [],
  error: ''
}

  it('should return the initial state', () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(
      {
        isPending: true,
    robots: [],
    error: ''
      }
    )
  })

  it('should handle REQUEST_ROBOTS_PENDING action', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_PENDING,
        payload: {isPending: true}
      })
    ).toEqual(
      {
        robots: [],
        isPending: true,
        error: ''
      }
    )
  })
  it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: [{
            id: '123',
            name: 'test',
            email: 'j@jmail.com'
          }]
      })
    ).toEqual(
      {
        robots: [{
          id: '123',
          name: 'test',
          email: 'j@jmail.com'
        }],
        isPending: true
      }
    )
  })
  it('should handle REQUEST_ROBOTS_FAILED action', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_FAILED,
        payload: 'NOOO'
      })
    ).toEqual(
      {
        error: 'NOOO',
        robots: [],
        isPending: false
      }
    )
  })
})