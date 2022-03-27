import React from 'react';
import axios from 'axios';
const Stats = () => {

  

    axios.get("https://api.jikan.moe/v4/anime")
    .then((res) =>{
        let setType = res.data.data[0].type;
        let setScore = res.data.data[0].score;
        let setYear = res.data.data[0].year;
        let setSeason = res.data.data[0].season;
        console.log(setType);
        console.log("hi");
        document.getElementById("typeBtn").textContent = setType;
        document.getElementById("scoreBtn").textContent = setScore;
        document.getElementById("yearBtn").textContent = setYear;
        document.getElementById("seasonBtn").textContent = setSeason;

        // let objectCount = res.data.length;
        // var randomNumber = Math.floor(Math.random() * objectCount);
        // console.log(randomNumber);
    });

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
}

export default Stats;