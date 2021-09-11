import s from '../ImageGalleryItem/ImageGalleryItem.module.css';

const ImageGalleryItem = imagProp => {
  const { id, webImg } = imagProp;

  return (
    <li className={s.imageGalleryItem}>
      <img src={webImg} alt={id} className={s.imageGalleryItemImage} />
    </li>
  );
};

export default ImageGalleryItem;
