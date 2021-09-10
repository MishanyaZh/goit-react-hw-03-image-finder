import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

// import s from '../ImageGallery/ImageGallery.module.css';

const ImageGallery = ({ images }) => {
  // console.log({images});

  return (
    // treba tak
    // !!!!!!!!!!!!!!!!!!!!!!!!
    // <ul className={s.imageGallery}>
    // <ImageGalleryItem props={images}/>
    // </ul>

    <div>
      <ImageGalleryItem props={images} />
    </div>

    // <ul className={s.imageGallery}>
    //     {images.map(img => (
    //     <li key={img.id} className="ImageGalleryItem">
    //       <img src={img.webImg} alt="" className="ImageGalleryItem-image" />
    //     </li>
    //   ))}
    // </ul>
  );
};

export default ImageGallery;
