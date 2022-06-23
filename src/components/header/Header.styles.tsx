import styled from 'styled-components'

export const HeaderTools = styled.header`
  width: 100%;
  height: 177px;
`
export const TitleHeader = styled.h1`
  font-family: 'Source Sans Pro', sans-serif;

  margin-bottom: 10px;
`

export const SubTitleHeader = styled.h2`
  font-family: 'Source Sans Pro', sans-serif;
`

export const DivHeaderTools = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 26px;

  width: 100%;
`
export const DivSearch = styled.div`
  display: flex;
  align-items: center;
`
export const BoxSearch = styled.span`
  position: relative;
`

export const SearchTools = styled.input`
  width: 364px;
  height: 50px;

  padding-left: 60px;

  background-color: #ebeaed;

  border-radius: 5px;
  border: 1px solid #ebeaed;

  transition: linear 0.5s;

  :hover {
    border: 1px solid black;
  }

  :focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`

export const CheckBoxSearch = styled.input`
  margin-right: 8px;
  margin-left: 14px;
`
export const LabelCheckSearch = styled.label`
  font-size: 20px;
`

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 196px;
  height: 50px;

  background-color: #365df0;
  color: white;

  border-radius: 5px;
  border: none;

  position: relative;

  cursor: pointer;
  transition: 0.6s;

  :hover {
    background-color: #06238b;
  }
`

export const IconAdd = styled.svg`
  position: absolute;
  left: 22px;
  bottom: 13px;
`

export const IconSearch = styled.svg`
  position: absolute;
  left: 20px;
  bottom: 15px;
`
