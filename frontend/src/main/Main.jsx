import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios'

function Main() {

  axios.get('http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=cher&api_key=120db4fb3730b228abd3a2ffa09e8c14&format=json')
  .then(response => {
      console.log(response)
  })
  .catch(error => {
      console.log(error)
  })
  axios.get('http://ws.audioscrobbler.com/2.0/?method=album.search&album=believe&api_key=120db4fb3730b228abd3a2ffa09e8c14&format=json')
  .then(response => {
      console.log(response)
  })
  .catch(error => {
      console.log(error)
  })

  // let getWeather = async (lat, long) => {
  //   let res = await axios.get("http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=cher&api_key=120db4fb3730b228abd3a2ffa09e8c14&format=json", {
  //     params: {
  //       lat: lat,
  //       lon: long,
  //       appid: process.env.REACT_APP_OPEN_WHEATHER_KEY,
  //       lang: 'pt',
  //       units: 'metric'
  //     }  
  //   });
  //   setWeather(res.data);
  //   console.log(res.data)
  // }

  return (
    <Fragment>
      <h3>Pesquisar album e artistas</h3>
      <hr/>
      <form action="" method="post">
        <input type="text"/>
        <button type="submit">Pesquisar</button>
      </form>
      {/* <h3>Clima nas suas Coordenadas ({response['artistmatches']['artist']})</h3> */}
      
    </Fragment>
  )
}

export default Main
