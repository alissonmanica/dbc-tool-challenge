import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import renderer from 'react-test-renderer'

import Header from './Header'

describe('snapshot testing', () => {
  const initialState = {
    tools: [],
    toolsSearch: [],
    isOnlyTag: false,
    openModalAdd: false
  }
  const mockStore = configureStore()
  let store = mockStore(initialState)

  it('should test snapshot Header component', () => {
    const renderedComponent = renderer
      .create(
        <Provider store={store}>
          <Header />
        </Provider>
      )
      .toJSON()
    expect(renderedComponent).toMatchSnapshot()
  })
})
