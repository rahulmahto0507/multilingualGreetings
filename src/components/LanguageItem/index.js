import {ListContainer, LanguageButton} from './styledComponents'

const LanguageItem = props => {
  const {greetingDetails, onClickChangeLanguage, isActive} = props
  const {buttonText, id} = greetingDetails

  const onClickButton = () => {
    onClickChangeLanguage(id)
  }

  return (
    <ListContainer>
      <LanguageButton type="button" active={isActive} onClick={onClickButton}>
        {buttonText}
      </LanguageButton>
    </ListContainer>
  )
}
export default LanguageItem
