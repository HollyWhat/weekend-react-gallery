//import React from 'react';
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
//import { use } from '../../../server/routes/gallery.router';
//import galleryItems from '../GalleryItem';



function App() {
const [galleryItems, setGalleryItems] =useState([]);

useEffect(() => {
  console.log('use effect -page load');
  fetchGalleryImages();
}, []);

const fetchGalleryImages = () => {
  axios({
    method: 'GET',
    url: 'gallery'
  }).then(response =>{
    setGalleryItems(response.data);
    console.log("get test", response.data );
  }).catch(error =>{
    console.log(error);
    alert('something is wrong!')
  });
}
  return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <br/>
        <img src="images/ghosts.jpg"/>
        <br/>
        <img src="images/holly.JPG"/>
        <br/>
        <img src="images/pup.jpeg"/>
        <br/>
        <img src="images/smilecoffee.jpg"/>
      </div>
    );

 

}

export default App;
