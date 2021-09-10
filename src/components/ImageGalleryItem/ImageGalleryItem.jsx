import s from '../ImageGallery/ImageGallery.module.css';

const ImageGalleryItem = images => {
  // console.log(images.props);
  // const { id, webImg } = images;

  const imgArr = images.props;
  console.log(imgArr);

  return (
    // <span>ooo</span>
    <ul className={s.imageGallery}>
      {imgArr.map(img => (
        <li key={img.id} className="ImageGalleryItem">
          <img src={img.webImg} alt="" className="ImageGalleryItem-image" />
        </li>
      ))}
    </ul>

    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // treba tak
    //   {imgArr.map(img => (

    //         <li key={img.id} className="ImageGalleryItem">
    //             <img src={img.webImg} alt="" className="ImageGalleryItem-image" />
    //         </li>

    //     ))}
    //   !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  );
};

export default ImageGalleryItem;
