import React from 'react'
import { StyledDiv } from '../styles/NotificationStyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const Notification = () => {
  return (
    <StyledDiv>
      <FontAwesomeIcon icon={faTimes} />
      Thank you for your nominations!
    </StyledDiv>
  )
}

export default Notification
