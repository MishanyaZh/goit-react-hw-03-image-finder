import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

import s from '../ImageGallery/ImageGallery.module.css';

const ImageGallery = ({ images, onSelect }) => {
  const { id, webImg, largeImg } = images;
  return (
    <ul className={s.imageGallery}>
      {images.map(img => {
        return (
          <ImageGalleryItem
            onClick={e => {
              this.onSelect(largeImg);
              console.log(e);
            }}
            {...img}
            key={img.id}
          />
        );
      })}
    </ul>
  );
};

export default ImageGallery;
