import React from 'react';
import axios from 'axios';
//  <image src={imageUrl} /> 

axios.get("https://api.jikan.moe/v4/anime")
.then((res)=>{
    const objectCount = res.data.data.length;
    const randomSelection = Math.floor(Math.random() * objectCount);
    
    let setImage = res.data.data[randomSelection].images.jpg.image_url;
    let setTitle = res.data.data[randomSelection].title;
    let setSynopsis = res.data.data[randomSelection].synopsis;
    document.getElementById("Poster").value = setImage;
    document.getElementById("titleText").textContent = setTitle;
    document.getElementById("synopsisText").textContent = setSynopsis;
    console.log(randomSelection);
    console.log(setImage);

    //stats
    let setType = res.data.data[randomSelection].type;
    let setScore = res.data.data[randomSelection].score;
    let setYear = res.data.data[randomSelection].year;
    let setSeason = res.data.data[randomSelection].season;
    console.log(setType);
    console.log("hi");
    document.getElementById("typeBtn").textContent = setType;
    document.getElementById("scoreBtn").textContent = setScore;
    document.getElementById("yearBtn").textContent = setYear;
    document.getElementById("seasonBtn").textContent = setSeason;
});
const MainInfo =()=>{

    return(
        <div className='main-container'>
             <div className="stat-container">
            <div className='statOne'><p id="typeBtn" className='type'></p></div>
            <div className='statTwo'><p id="scoreBtn" className='score'></p></div>
            <div className='statThree'><p id="yearBtn" className='year'></p></div>
            <div className='statFour'><p id="seasonBtn" className='season'></p></div>
            
        </div>
            <div className='mainInfo-container'>
            <div id="Poster" className="poster"></div>
            <div id="titleText" className="title"></div>
            <div id="synopsisText" className="synopsis"></div>
            </div>
        </div>
    );
}
export default MainInfo
