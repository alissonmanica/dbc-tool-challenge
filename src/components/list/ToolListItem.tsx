import { useDispatch } from 'react-redux'
import { Tool } from '../../models/ToolDTO'
import { toolActions } from '../../store/tools/duck'
import { FormatTags } from '../../Utils'
import {
  DivTags,
  DivTitleItem,
  ContainerToolItem,
  TagsParagraph,
  TitleItem,
  BoxRemove
} from './ToolList.styles'

function ToolListItem({ tool }: { tool: Tool }) {
  const dispatch = useDispatch()

  return (
    <ContainerToolItem>
      <DivTitleItem>
        <TitleItem>{tool.name}</TitleItem>
        <BoxRemove>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 13.001L1 1M13 1.001L1 13.001L13 1.001Z"
              stroke="#170C3A"
              stroke-width="2"
              stroke-miterlimit="10"
            />
          </svg>

          <p onClick={() => dispatch(toolActions.toggleOpenModalRemove())}>
            remove
          </p>
        </BoxRemove>
      </DivTitleItem>
      <p>{tool.description}</p>
      <DivTags>
        {tool.tag.map((tag, index) => (
          <TagsParagraph key={index}>{FormatTags(tag.name)}</TagsParagraph>
        ))}
      </DivTags>
    </ContainerToolItem>
  )
}
export default ToolListItem
