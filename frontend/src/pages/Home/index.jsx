import React, { Component } from "react";
import axios from "axios";

import Header from '../../components/Header'
import List from '../../components/List'

class App extends Component {
  constructor() {
    super();
    this.state = {
      lastfm: {
        url: "http://ws.audioscrobbler.com/2.0/",
        key: "120db4fb3730b228abd3a2ffa09e8c14"
      },
      artist: []
      // album: []
    };
  }

  getSearch = e => {
    const search = e.target.value;
    const { url, key } = this.state.lastfm;

    axios.get(`${url}?method=artist.search&artist=${search}&api_key=${key}&format=json`)
      .then(({ data }) => this.setState({ artist: data.results.artistmatches.artist }));

    // axios.get(`${url}?method=album.search&album=${search}&api_key=${key}&format=json`)
    //   .then(({ data }) => this.setState({ album: data.results.albummatches.album }));    
    
    }

  render() {
    const { artist } = this.state;
    return (
      <div>
        <Header />
        <div className="container">
          <div className="search card card-body mb-3">
            <h1>Pesquisar Usuários do GitHub</h1>
            <p className="lead">
              Digite um nome para encontrar usuários e repositórios
            </p>
            <input
              onChange={this.getSearch}
              placeholder="Digite o nome de um usuário..."
              required
            />
          </div>
          <div className="results">
            {artist.map(item => (
                <List item={item} key={item.mbid} />
            ))}
          </div>
          {/* {artist.length !== 0 ? this.renderProfile() : null} */}
        </div>
      </div>
    );
  }
}

export default App;
