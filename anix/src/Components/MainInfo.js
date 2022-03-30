import React from 'react';
import axios from 'axios';
// import objectCount from './Stats';
// import randomSelection from './Stats';

axios.get("https://api.jikan.moe/v4/anime")
.then((res)=>{
    const objectCount = res.data.data.length;
    const randomSelection = Math.floor(Math.random() * objectCount);
    console.log(objectCount);
    let setImage = res.data.data[randomSelection].images.jpg.image_url;
    let setTitle = res.data.data[randomSelection].title;
    let setSynopsis = res.data.data[randomSelection].synopsis;
    document.getElementById("Poster").value = setImage;
    document.getElementById("titleText").textContent = setTitle;
    document.getElementById("synopsisText").textContent = setSynopsis;
    console.log(randomSelection);
})
const MainInfo =()=>{

    return(
        <div className='main-container'>
            <div className='mainInfo-container'>
            <div id="Poster" className="poster"></div>
            <div id="titleText" className="title"></div>
            <div id="synopsisText" className="synopsis"></div>
            </div>
        </div>
    );
}
export default MainInfo
