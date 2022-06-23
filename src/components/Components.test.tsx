import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import renderer from 'react-test-renderer'
import Button from './Button'
import Search from './Search'
import { render } from '@testing-library/react'

describe('snapshot testing', () => {
  const initialState = {
    tools: [],
    toolsSearch: [],
    isOnlyTag: false,
    openModalAdd: false
  }
  const mockStore = configureStore()
  let store = mockStore(initialState)

  it('should test snapshot Button component', () => {
    const renderedComponent = renderer
    renderer.create(
      <Provider store={store}>
        <Button />
      </Provider>
    ).toJSON
    expect(renderedComponent).toMatchSnapshot()
  })

  it('should test snapshot Search component', () => {
    const renderedComponent = renderer
    renderer.create(
      <Provider store={store}>
        <Search />
      </Provider>
    ).toJSON
    expect(renderedComponent).toMatchSnapshot()
  })

  it('should render Search component', () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    )
  })
})
