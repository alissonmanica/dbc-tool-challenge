import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { render, screen } from '@testing-library/react'
import ToolList from './ToolList'
import renderer from 'react-test-renderer'

describe('snapshot testing', () => {
  const initialState = {
    tools: [],
    toolsSearch: [],
    isOnlyTag: false,
    openModalAdd: false
  }
  const mockStore = configureStore()
  let store = mockStore(initialState)

  it('should test snapshot for ToolList component', () => {
    const renderedComponent = renderer
      .create(
        <Provider store={store}>
          <ToolList />
        </Provider>
      )
      .toJSON()
    expect(renderedComponent).toMatchSnapshot()
  })
})
