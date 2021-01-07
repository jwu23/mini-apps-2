import React from 'react';

const EditModal = ({openCloseModal, showModal, event}) => {
  var showHideClassName = showModal ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <div className='modal-main'>
        {event.description}
        <button onClick={openCloseModal}>close</button>
      </div>
    </div>
  )
}

export default EditModal;