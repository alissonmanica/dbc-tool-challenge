import { useDispatch } from 'react-redux'
import { toolActions } from '../store/tools/duck'
import { AddButton, IconAdd } from './header/Header.styles'

function Button() {
  const dispatch = useDispatch()

  return (
    <>
      <AddButton
        onClick={() => dispatch(toolActions.toggleOpenModalAdd())}
        type="button"
      >
        <IconAdd
          width="28"
          height="24"
          viewBox="0 0 28 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.125 13H15.375V19H13.125V13H6.375V11H13.125V5H15.375V11H22.125V13Z"
            fill="white"
          />
        </IconAdd>
        Add
      </AddButton>
    </>
  )
}
export default Button
