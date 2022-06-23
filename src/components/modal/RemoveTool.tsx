import { useDispatch } from 'react-redux'
import { toolActions } from '../../store/tools/duck'
import {
  BackgroundModalTool,
  ButtonModal,
  ContainerRemoveTool,
  DivButtonsModal,
  TitleModal
} from './Modal.styles'

function RemoveTool({
  id,
  name,
  setOpenRemove
}: {
  id?: string
  name?: string
  setOpenRemove?: Function
}) {
  const dispatch = useDispatch()

  const removeToolFunction = () => {
    dispatch(toolActions.remove(id))
    setOpenRemove?.(false)
  }

  return (
    <BackgroundModalTool>
      <ContainerRemoveTool>
        <TitleModal>
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
          Remove tool
        </TitleModal>

        <p>Are you sure you want to remove {name}?</p>

        <DivButtonsModal>
          <ButtonModal
            onClick={() => setOpenRemove?.(false)}
            color="#365df0"
            background="#e1e7fd"
            type="button"
          >
            Cancel
          </ButtonModal>
          <ButtonModal
            onClick={removeToolFunction}
            color="#ffffff"
            background="#365df0"
            type="button"
          >
            Yes, remove
          </ButtonModal>
        </DivButtonsModal>
      </ContainerRemoveTool>
    </BackgroundModalTool>
  )
}
export default RemoveTool
