// import React, { Component } from "react";
// // import { Link, withRouter } from "react-router-dom";

// import axios from "axios";

// import api from "../../services/api";
// import { logout } from "../../services/auth";

// import Header from '../../components/Header/index'
// // import ListA from '../../components/ListA/index'
// // import ListB from '../../components/ListB/index'

// import './styles.css'

// class App extends Component {
//   state = {
//     lastfm: {
//       URL: 'http://ws.audioscrobbler.com/2.0/',
//       KEY: '120db4fb3730b228abd3a2ffa09e8c14'
//     },
//     artist: [],
//     album: []
//   }


//   getSearch = async e => {
//     const search = e.target.value;
//     const { URL, KEY } = this.state.lastfm


//     const album = await axios.get(`${URL}?method=artist.gettopalbums&artist=${search}&api_key=${KEY}&format=json`)
//       .then(({ data }) => this.setState({ album: data.topalbums.album }))

//       const artist = await axios.get(`${URL}?method=artist.search&artist=${search}&api_key=${KEY}&format=json`)
//       .then(({ data }) => this.setState({ artist: data.results.artistmatches.artist }))

//   }



//     handleLogout = async e => {
//       e.preventDefault()
//       const response = await api.get("/home")
//         logout(response)
//         this.props.history.push("/")
//     }

//   render() {
//     return (
//       <>
//       <Header />
//       <div className="home">
//         <button onClick={this.handleLogout} type="submit">Logout</button>
//         <div className="container-home">
//             <div className="search">
//               {/* <select className="search-select">
//                 <option onChange={this.getSearchArtist} className="search-option" >Albuns</option>
//                 <option onChange={this.getSearchAlbuns} className="search-option">Artists</option>)
//               </select> */}
//               <input
//                 onChange={this.getSearch}
//                 placeholder="Pesquisar..."
//                 required
//               />
//               <button type="submit">Search</button>
//           </div>
//           <span>Results List</span>
//           {/* {this.renderListA()}
//           {this.renderListB()} */}
//         </div>
//       </div>
//       </>
//     );
//   }
//   // renderListA() {
//   //   const  { artist } = this.state

//   //   return (
//   //     <div className="info">
//   //       <div className="container-info">
//   //         {artist.map(itemA => (<ListA itemA={itemA} key={itemA.mbid}/>))}
//   //       </div>
//   //   </div>
//   //   )
//   // }
//   // renderListB() {
//   //   const  { album } = this.state

//   //   return (
//   //     <div className="info">
//   //       <div className="container-info">
//   //         {album.map(itemB => (<ListB itemB={itemB} key={itemB.mbid}/>))}
//   //       </div>
//   //   </div>
//   //   )
//   // }
// }

// export default App


import React, { Component } from "react";
import axios from "axios";

import api from "../../services/api";
import { logout } from "../../services/auth";

import Header from '../../components/Header'
import List from '../../components/List'

import { Container } from './styles'

class App extends Component {
  state = {
    lastfm: {
      url: 'http://ws.audioscrobbler.com/2.0/',
      key: '120db4fb3730b228abd3a2ffa09e8c14'
    },
    artist: []
  }

  getSearch = async e => {
    e.preventDefault()
    const search = e.target.value;
    const { url, key } = this.state.lastfm;

    if (search.length > 0) {
      let results = await axios.get(`${url}?method=artist.search&artist=${search}&api_key=${key}&format=json`)
      .then(({ data }) => this.setState({ artist: data.results.artistmatches.artist }));

    // axios.get(`${url}?method=album.search&album=${search}&api_key=${key}&format=json`)
    //   .then(({ data }) => this.setState({ album: data.results.albummatches.album }));    
      return results
    }
  }

  handleLogout = async e => {
    e.preventDefault()
    const response = await api.get("/home")
      logout(response)
      this.props.history.push("/")
  }

  render() {
    const { artist } = this.state

    return (
      <Container>
        <Header />
          <p className="logout" onClick={this.handleLogout}>Logout</p>
          <div className="main search">
            <input
              onChange={this.getSearch}
              placeholder="Procure sua banda preferida"
              required
            />

          <div className="results">
            <span>Results List</span>
            {artist.map(item => (
                <List artist={item} key={item.mbid} />
            ))}
          </div>
          </div>
      </Container>
    )
  }
}

export default App;