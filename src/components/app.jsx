import React, { Component } from 'react';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';
import giphy from 'giphy-api'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "ZXf6dCfo4h9br1PMEQ",
    }
  }

  display = (gifId) => {
    this.setState({
      selectedGifId: gifId
    });
  }

  search = (query) => {
    giphy("lRq6UiGNGKjEIQDT39Kds4sWFKL66s6Z").search({
      q: query,
      rating:'g',
      limit: 20
    }, (err, res) => {
      this.setState({
        gifs: res.data
      })
    });
  }

  render () {
    const src = `https://media1.giphy.com/media/${this.state.selectedGifId}/giphy.gif?cid=ecf05e47701040536bebedc31bb6df06369e170997904307&rid=giphy.gif&ct=g`
    return (
      <div>
        <div className="left-scene">
          <div className="header">Find your Gif</div>
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId}/>
            <a href={src} target="_blank">LINK</a>
          </div>
        </div>

        <div className="right-scene">
          <div className="header">Results</div>
          <GifList gifs={this.state.gifs} display={this.display}/>
        </div>
      </div>
    )
  }
}

export default App;
