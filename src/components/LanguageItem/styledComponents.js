import styled from 'styled-components'

export const ListContainer = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
`

export const LanguageButton = styled.button`
  background-color: ${props => (props.active ? '#db1c48' : '#ffffff')};
  border: 1px solid #db1c48;
  color: ${props => (props.active ? '#ffffff' : '#db1c48')};
  border-radius: 15px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-right: 10px;
  margin-left: 10px;
  cursor: pointer;
  outline: none;
`
export const GreetingImage = styled.img`
  width: 300px;
  height: 300px;
`
