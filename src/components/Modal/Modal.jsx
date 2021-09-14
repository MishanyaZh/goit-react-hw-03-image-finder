import PropTypes from 'prop-types';
import { Component } from 'react';

// import * as basicLightbox from 'basiclightbox'

import s from '../Modal/Modal.module.css';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscape);
  }

  onEscape = e => {
    if (e.code === 'Escape') {
      this.props.onCloseModal();
    }
  };

  render() {
    const { image, onCloseModal } = this.props;

    return (
      <div onClick={onCloseModal} className={s.overlay}>
        <div className={s.modal}>
          <img src={image} alt={image} />

          {/* {basicLightbox.create(`
          <img src=${image} alt=${image} width="800" height="600"/>
          `).show()} */}
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  imgProp: PropTypes.string,
  onCloseModal: PropTypes.func,
};
