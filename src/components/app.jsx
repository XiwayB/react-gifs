import React, { Component } from 'react';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';
import giphy from 'giphy-api'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [
      {id: "lNByEO1uTbVAikv8oT"},
      {id: "3ohzdIuqJoo8QdKlnW"}
      ],
      selectedGifId: "lNByEO1uTbVAikv8oT",
    }
  }

  search = (query) => {
    giphy("lRq6UiGNGKjEIQDT39Kds4sWFKL66s6Z").search({
      q: query,
      rating:'g',
      limit: 10
    }, (err, res) => {
      this.setState({
        gifs: res.data
      })
    });
  }

  render () {
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId}/>
          </div>
        </div>

        <div className="right-scene">
          <GifList gifs={this.state.gifs}/>
        </div>
      </div>
    )
  }
}

export default App;
