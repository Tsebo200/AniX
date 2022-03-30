import React from 'react';
import axios from 'axios';
const Stats = () => {

  

    axios.get("https://api.jikan.moe/v4/anime")
    .then((res) =>{
        const objectCount = res.data.data.length;
        const randomSelection = Math.floor(Math.random() * objectCount);
        
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

        
        console.log(randomSelection);
    });

// const Stats=(props)=>{
    // let objectCount = res.data.data.length;
    // let randomSelection = Math.floor(Math.random() * objectCount);

    return(
        <>
        <div className="stat-container">
            <div className='statOne'><p id="typeBtn" className='type'></p></div>
            <div className='statTwo'><p id="scoreBtn" className='score'></p></div>
            <div className='statThree'><p id="yearBtn" className='year'></p></div>
            <div className='statFour'><p id="seasonBtn" className='season'></p></div>
        </div>
        </>
    );
// }
}

export default Stats
