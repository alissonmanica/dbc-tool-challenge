import styled from 'styled-components'
import CreatableSelect from 'react-select/creatable'

export const BackgroundModalTool = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;

  background: rgba(143, 143, 143, 0.64);

  width: 100%;
  min-height: 100vh;
`

export const TitleModal = styled.div<{
  paddingLeft?: string
}>`
  display: flex;
  align-items: center;
  gap: 9px;

  padding-left: ${props => props.paddingLeft};

  font-size: 18px;
  font-weight: 700;
`

export const DivButtonsModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 25px;

  width: 100%;
`

export const ButtonModal = styled.button<{
  color: string
  background: string
}>`
  height: 42.3px;
  width: 122px;
  color: ${props => props.color};

  background-color: ${props => props.background};

  border: none;
  border-radius: 5px;

  cursor: pointer;
  transition: linear 0.8s;

  :hover {
    background-color: #06238b;
    color: white;
  }
`

// RemoveTool Modal
export const ContainerRemoveTool = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;

  padding: 31px 25px 17.5px 31px;

  width: 489px;
  height: 253px;

  background-color: #ffffff;
`

// AddTool Modal
export const ContainerAddTool = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-around;

  padding: 36px 28px 18.5px 28px;

  width: 600px;
  height: 612px;

  border-radius: 5px;

  background-color: #ffffff;
`

export const DivInputTool = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;

  width: 100%;
  margin-top: 30px;
  padding-bottom: 16px;
`

export const DivFieldTools = styled.div`
  position: relative;

  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 7px;

  padding-bottom: 15px;
`

export const LabelInputAddTool = styled.label`
  width: 100%;
`

export const InputAddTool = styled.input`
  width: 100%;
  height: 50px;

  padding-left: 10px;

  background-color: #f5f4f6;

  border: 1px solid #ebeaed;
  border-radius: 5px;
`

export const TextareaDescriptionAddTool = styled.textarea`
  box-sizing: border-box;

  background-color: #f5f4f6;
  border: 1px solid #ebeaed;
  border-radius: 5px;

  min-height: 115px;
  max-height: 115px;
  min-width: 100%;
  max-width: 100%;
  padding: 10px;

  resize: none;
`
export const SelectTags = styled(CreatableSelect)`
  width: 100%;
  height: 50px;

  padding-left: 10px;

  background-color: #f5f4f6;

  border: 1px solid #ebeaed;
  border-radius: 5px;
`
export const DivError = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;

  color: red;
  font-size: 14px;
`
