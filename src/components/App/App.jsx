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
    reqStatus: 'idle',
    // idle, pending, resolved, rejected
    page: 1,
  };

  handleFormSubmit = imgValue => {
    this.setState({ imgValue });
  };

  loadMoreClick = e => {
    this.setState({
      page: this.state.page + 1,
    });
    console.log(this.state.page);
    console.log(this.state.page + 1);
  };

  async componentDidUpdate(_, prevState) {
    if (
      prevState.imgValue !== this.state.imgValue ||
      prevState.page !== this.state.page
    ) {
      // this.setState({ reqStatus: 'pending' });
      // this.setState({ reqStatus: 'resolved' });

      if (this.state.imgValue === '') {
        toast.error('Pleas write something');
        return;
      }

      if (prevState.imgValue !== this.state.imgValue) {
        this.setState({
          images: [],
          page: 1,
        });
      }

      try {
        const images = await fetchImages(this.state.imgValue, this.state.page);

        if (images.length === 0) {
          toast.error('your images not faind.');
          return;
        }

        this.setState({
          reqStatus: 'resolved',
        });

        this.setState(prevState => {
          if (prevState.imgValue !== this.state.imgValue) {
            return { images: [...prevState.images], page: 1 };
          }

          return {
            images: [...prevState.images, ...images],
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

  render() {
    // const {idle, pending, resolved, rejected} = this.state.reqStatus

    return (
      <div className={s.app}>
        <Searchbar onSubmit={this.handleFormSubmit} />

        {/* {this.state.reqStatus === "resolved" && */}
        <ImageGallery images={this.state.images} />
        {/* } */}

        {this.state.reqStatus === 'resolved' && (
          <Button onClickLoadMore={this.loadMoreClick} />
        )}

        <Toaster position="top-right" reverseOrder={false} />
      </div>
    );
  }
}

export default App;
