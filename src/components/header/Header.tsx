import { useDispatch, useSelector } from 'react-redux'
import { toolActions } from '../../store/tools/duck'
import toolSelector from '../../store/tools/selector'
import Button from '../Button'
import Search from '../Search'
import {
  DivHeaderTools,
  DivSearch,
  HeaderTools,
  CheckBoxSearch,
  SubTitleHeader,
  TitleHeader,
  LabelCheckSearch
} from './Header.styles'

function Header() {
  const dispatch = useDispatch()
  const isOnlyTag = useSelector(toolSelector.isOnlyTag)

  return (
    <HeaderTools>
      <TitleHeader>VUTTR</TitleHeader>
      <SubTitleHeader>Very Useful Tools to Remember</SubTitleHeader>
      <DivHeaderTools>
        <DivSearch>
          <Search />
          <LabelCheckSearch>
            <CheckBoxSearch
              onChange={() => dispatch(toolActions.toggleIsOnlyTag())}
              type="checkbox"
              id="tags-only"
              name="tags-only"
              checked={isOnlyTag}
            />
            search in tags only
          </LabelCheckSearch>
        </DivSearch>
        <Button />
      </DivHeaderTools>
    </HeaderTools>
  )
}
export default Header
