import React from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {
  StyledContent,
  StyledModal,
  StyledIcon,
} from '../styles/NotificationStyle';


const Notification = ({ closeModal }) => {
  return (
    <StyledModal>
      <StyledContent>
        <StyledIcon icon={faTimes} onClick={() => closeModal()} />
        Thank you for your nominations!
      </StyledContent>
    </StyledModal>
  );
};

export default Notification;
