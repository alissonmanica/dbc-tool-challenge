import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import renderer from 'react-test-renderer'
import AddTool from './AddTool'
import RemoveTool from './RemoveTool'

describe('snapshot testing', () => {
  const initialState = {
    tools: [],
    toolsSearch: [],
    isOnlyTag: false,
    openModalAdd: false
  }
  const mockStore = configureStore()
  let store = mockStore(initialState)

  it('should test snapshot AddTool component', () => {
    const renderedComponent = renderer
    renderer.create(
      <Provider store={store}>
        <AddTool />
      </Provider>
    ).toJSON
    expect(renderedComponent).toMatchSnapshot()
  })

  it('should test snapshot RemoveTool component', () => {
    const renderedComponent = renderer
    renderer.create(
      <Provider store={store}>
        <RemoveTool />
      </Provider>
    ).toJSON
    expect(renderedComponent).toMatchSnapshot()
  })
})
