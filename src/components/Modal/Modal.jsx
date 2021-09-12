// import * as basicLightbox from 'basiclightbox'

import s from '../Modal/Modal.module.css';

const Modal = imgProp => {
  // const { id,webImg, largeImg } = imgProp;
  // console.log(imgProp);
  return (
    <div className={s.overlay}>
      <div className={s.modal}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo atque
          laudantium deserunt rerum quisquam nulla, praesentium provident
          debitis aut corrupti doloribus doloremque officiis odit vero,
          similique tempora quibusdam necessitatibus enim.
        </p>
        <img src={imgProp.largeImg} alt={imgProp.id} />

        {/* {basicLightbox.create(`
                <img src=${largeImg} alt=${id} />
                `).show()} */}
      </div>
    </div>
  );
};

export default Modal;
