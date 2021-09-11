import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

import s from '../ImageGallery/ImageGallery.module.css';

const ImageGallery = ({ images }) => {
  return (
    <ul className={s.imageGallery}>
      {images.map(img => {
        return <ImageGalleryItem {...img} key={img.id} />;
      })}
    </ul>
  );
};

export default ImageGallery;
