import PropTypes from 'prop-types';

// import * as basicLightbox from 'basiclightbox'

import s from '../Modal/Modal.module.css';

const Modal = imgProp => {
  const { image, onCloseModal } = imgProp;

  return (
    <div
      onClick={e => {
        onCloseModal();
      }}
      className={s.overlay}
    >
      <div className={s.modal}>
        <img src={image} alt={image} />

        {/* {basicLightbox.create(`
        <img src=${image} alt=${image} width="800" height="600"/>
        `).show()} */}
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  imgProp: PropTypes.string,
  onCloseModal: PropTypes.func,
};
