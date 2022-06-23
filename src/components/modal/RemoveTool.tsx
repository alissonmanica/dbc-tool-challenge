import { useDispatch } from 'react-redux'
import { toolActions } from '../../store/tools/duck'
import {
  BackgroundModalTool,
  ButtonModal,
  ContainerRemoveTool,
  DivButtonsModal,
  TitleModal
} from './Modal.styles'

function RemoveTool() {
  const dispatch = useDispatch()

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

        <p>Are you sure you want to remove TOOL?</p>

        <DivButtonsModal>
          <ButtonModal
            onClick={() => dispatch(toolActions.toggleOpenModalRemove())}
            color="#365df0"
            background="#e1e7fd"
            type="button"
          >
            Cancel
          </ButtonModal>
          <ButtonModal color="#ffffff" background="#365df0" type="button">
            Yes, remove
          </ButtonModal>
        </DivButtonsModal>
      </ContainerRemoveTool>
    </BackgroundModalTool>
  )
}
export default RemoveTool
