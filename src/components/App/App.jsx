import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import s from '../App/App.module.css';
import { FetchImages } from '../../services/api';

import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';

class App extends Component {
  state = {
    imgValue: null,
    images: [],
    reqStatus: '',
    // idle, pending, resolved, rejected
  };

  handleFormSubmit = imgValue => {
    this.setState({ imgValue });
  };

  async componentDidUpdate(_, prevState) {
    if (prevState.imgValue !== this.state.imgValue) {
      toast.success('is your images.');
      const images = await FetchImages(this.state.imgValue);

      this.setState({ images });
    }
  }

  render() {
    return (
      <div className={s.app}>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery images={this.state.images} />

        <Toaster position="top-left" reverseOrder={false} />
      </div>
    );
  }
}

export default App;
