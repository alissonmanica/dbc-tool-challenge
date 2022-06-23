import styled from 'styled-components'

// List
export const ContainerList = styled.div`
  width: 100%;
  min-height: 540px;

  margin-top: 72px;
`

// Tool Item
export const ContainerToolItem = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 160px;

  margin-bottom: 30px;
  padding: 15px 35px 19px 30px;
  background-color: #fdfdfd;

  box-shadow: 5px 6px 7px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`

export const DivTitleItem = styled.div`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const TitleItem = styled.a`
  font-size: 24px;
  font-weight: 400;
  color: #170c3a;

  text-decoration: none;
  transition: all 0.4s;

  :hover {
    text-decoration: underline;
    transform: scale(1.05);
  }
`

export const BoxRemove = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;

  color: #000000;

  background: none;

  cursor: pointer;

  border: none;

  :hover {
    text-decoration: underline;
  }
`

export const DivTags = styled.div`
  display: flex;
  gap: 4px;
`

export const TagsParagraph = styled.p`
  font-weight: bold;
  font-size: 18px;
`
