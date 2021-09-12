import s from '../ImageGalleryItem/ImageGalleryItem.module.css';

const ImageGalleryItem = (imagProp, onClick) => {
  const { id, webImg, largeImg } = imagProp;

  return (
    <li
      onClick={() => {
        // onClick();
        console.log(largeImg);
      }}
      className={s.imageGalleryItem}
    >
      <img src={webImg} alt={id} className={s.imageGalleryItemImage} />
    </li>
  );
};

export default ImageGalleryItem;
