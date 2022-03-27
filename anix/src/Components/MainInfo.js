import React from 'react';
import axios from 'axios';
axios.get("https://api.jikan.moe/v4/anime")
.then((res)=>{
    let setImage = res.data.data[0].images.jpg.image_url;
    let setTitle = res.data.data[0].title;
    let setSynopsis = res.data.data[0].synopsis;
    document.getElementById("Poster").value = setImage;
    document.getElementById("titleText").textContent = setTitle;
    document.getElementById("synopsisText").textContent = setSynopsis;
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