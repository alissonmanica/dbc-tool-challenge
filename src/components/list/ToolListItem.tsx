import { useDispatch, useSelector } from 'react-redux'
import { Tool } from '../../models/ToolDTO'
import { firstUpper, FormatTags } from '../../Utils'
import {
  DivTags,
  DivTitleItem,
  ContainerToolItem,
  TagsParagraph,
  TitleItem,
  BoxRemove
} from './ToolList.styles'
import RemoveTool from '../modal/RemoveTool'
import { useState } from 'react'

function ToolListItem({ tool }: { tool: Tool }) {
  const dispatch = useDispatch()
  const [openRemove, setOpenRemove] = useState(false)

  return (
    <>
      <ContainerToolItem>
        <DivTitleItem>
          <TitleItem href={'http://' + tool.link} target="_blank">
            {firstUpper(tool.name)}
          </TitleItem>
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

            <p onClick={() => setOpenRemove(true)}>remove</p>
          </BoxRemove>
        </DivTitleItem>
        <p>{tool.description}</p>
        <DivTags>
          {tool.tag.map((tag, index) => (
            <TagsParagraph key={index}>{FormatTags(tag.name)}</TagsParagraph>
          ))}
        </DivTags>
      </ContainerToolItem>
      {openRemove && (
        <RemoveTool
          id={tool.id}
          name={tool.name}
          setOpenRemove={setOpenRemove}
        />
      )}
    </>
  )
}
export default ToolListItem
