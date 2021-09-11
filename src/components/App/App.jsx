import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import s from '../App/App.module.css';
import { fetchImages } from '../../services/api';

import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';

class App extends Component {
  state = {
    imgValue: null,
    images: [],
    reqStatus: '',
    // idle, pending, resolved, rejected
    page: 1,
  };

  handleFormSubmit = imgValue => {
    this.setState({ imgValue });
  };

  onClickButton = page => {
    this.setState({ page: +1 });
    console.log(this.state.page);
  };

  async componentDidUpdate(_, prevState) {
    if (prevState.imgValue !== this.state.imgValue) {
      if (this.state.imgValue === '') {
        toast.error('Pleas write something');
        return;
      }

      try {
        const images = await fetchImages(this.state.imgValue);

        if (images.length === 0) {
          toast.error('your images not faind.');
          return;
        }

        this.setState({ images });
        toast('its your images ', {
          icon: '👏',
        });
      } catch (error) {
        toast.error("This didn't work.");
      }
    }
  }

  render() {
    return (
      <div className={s.app}>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery images={this.state.images} />
        <Button onClick={this.onClickButton} page={this.state.page} />

        <Toaster position="top-right" reverseOrder={false} />
      </div>
    );
  }
}

export default App;
