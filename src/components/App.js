import React from 'react';
import config from '../config/config';
import Header from './Header';
import SearchForm from './SearchForm';
import Movie from './Movie';

import '../styles/styles.css';

class App extends React.Component {
  
  state = {
    searchInput: '',
    movie: undefined
  }

  onSubmit = async (e) => {
    e.preventDefault();
    const movie = await fetch(`http://www.omdbapi.com/?apikey=${config.API_KEY}&t=${this.state.searchInput}`)
                        .then(res => res.json());
    this.setState(() => ({ movie }));                        
    this.clearInput();
  };

  clearInput = () => {
    this.setState(() => ({ searchInput: '' }));
  };

  onInputChange = (e) => {
    const searchInput = e.target.value;
    this.setState(() => ({ searchInput }));
  };

  render() {
    return (
      <div className="container">
        <Header />
        <SearchForm 
          searchInput={this.state.searchInput}
          onInputChange={this.onInputChange} 
          onSubmit={this.onSubmit}
        />  
        <Movie movie={this.state.movie}/>  
      </div>      
    )
  }
};

export default App;