import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Loader from 'react-loader-spinner';
import { LoaderContainer } from '../Loader/LoaderContainer.styled.jsx';

import s from '../App/App.module.css';
import { fetchImages } from '../../services/api';

import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
// import * as basicLightbox from 'basiclightbox'

class App extends Component {
  state = {
    imgValue: null,
    images: [],
    reqStatus: 'idle',
    // idle, pending, resolved, rejected
    page: 1,
    loader: false,
    // modal: false,
    selectImage: null,
  };

  handleSelectImage = imgUrl => {
    this.setState({ selectImage: imgUrl });
    console.log(imgUrl);
    // console.log("imageClick");
    // console.log(this.state.selectImage);
  };

  handleFormSubmit = imgValue => {
    this.setState({
      imgValue,
      page: 1,
      loader: true,
    });
  };

  loadMoreClick = e => {
    this.setState({
      page: this.state.page + 1,
      loader: true,
    });
  };

  async componentDidUpdate(_, prevState) {
    if (
      prevState.imgValue !== this.state.imgValue ||
      prevState.page !== this.state.page
    ) {
      this.setState({ loader: true });

      if (this.state.imgValue.trim() === '') {
        this.setState({
          reqStatus: 'pending',
        });
        toast.error('Pleas write something');
        return;
      }

      try {
        const images = await fetchImages(this.state.imgValue, this.state.page);
        this.setState({ loader: false });

        if (images.length === 0) {
          this.setState({
            reqStatus: 'rejected',
          });
          toast.error('your images not faind.');
          return;
        }

        if (prevState.imgValue !== this.state.imgValue) {
          this.setState({
            images: [],
            page: 1,
            // loader: true,
          });
        }

        this.setState(prevState => {
          return {
            images: [...prevState.images, ...images],
            reqStatus: 'resolved',
            loader: false,
          };
        });

        toast(`its your, ${this.state.imgValue}s!`, {
          icon: '👏',
        });
      } catch (error) {
        this.setState({ reqStatus: 'rejected' });
        toast.error("This didn't work.");
      }
    }
  }

  // imageClick = e => {
  //   console.log("imageClick");
  //   this.setState({
  //     modal: true,
  //   });
  // }

  render() {
    return (
      <div className={s.app}>
        <Searchbar onSubmit={this.handleFormSubmit} />

        <ImageGallery
          images={this.state.images}
          // onImageClick={this.imageClick}
          onSelect={this.handleSelectImage}
        />

        {this.state.selectImage && (
          <Modal
            // images={this.state.images}
            image={this.state.selectImage}
          />
        )}

        {(this.state.reqStatus === 'resolved') & !this.state.loader && (
          <Button onClickLoadMore={this.loadMoreClick} />
        )}

        <Toaster position="top-right" reverseOrder={false} />

        {this.state.loader !== false && (
          <LoaderContainer>
            <Loader
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={3000} //3 secs
            />
          </LoaderContainer>
        )}
      </div>
    );
  }
}

export default App;
