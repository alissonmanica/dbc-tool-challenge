import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import renderer from 'react-test-renderer'
import HomePage from './HomePage'

describe('snapshot testing', () => {
  const initialState = {
    tools: [],
    toolsSearch: [],
    isOnlyTag: false,
    openModalAdd: false
  }
  const mockStore = configureStore()
  let store = mockStore(initialState)

  it('should test snapshot HomePage component', () => {
    const renderedComponent = renderer
    renderer.create(
      <Provider store={store}>
        <HomePage />
      </Provider>
    ).toJSON
    expect(renderedComponent).toMatchSnapshot()
  })
})
