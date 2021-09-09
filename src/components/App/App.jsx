import { Component } from 'react';

import s from '../App/App.module.css';

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

  render() {
    return (
      <div className={s.app}>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery />
      </div>
    );
  }
}

export default App;
