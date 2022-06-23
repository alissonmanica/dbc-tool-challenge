import { useDispatch, useSelector } from 'react-redux'
import { ContainerList } from './ToolList.styles'
import toolSelector from '../../store/tools/selector'
import ToolListItem from './ToolListItem'
import AddTool from '../modal/AddTool'
import RemoveTool from '../modal/RemoveTool'
import { useEffect } from 'react'
import { toolActions } from '../../store/tools/duck'

function ToolList() {
  const tools = useSelector(toolSelector.get)
  const openModalAdd = useSelector(toolSelector.openModalAdd)
  const openModalRemove = useSelector(toolSelector.openModalRemove)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(toolActions.loadTools())
  }, [])

  return (
    <ContainerList>
      {openModalAdd && <AddTool />}
      {openModalRemove && <RemoveTool />}
      {tools.map((itemTools, index) => (
        <ToolListItem key={index} data-testid="item" tool={itemTools} />
      ))}
    </ContainerList>
  )
}
export default ToolList
