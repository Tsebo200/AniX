import "chart.js/auto";
import React from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {useState, useRef, useEffect} from 'react';

const Time = () => {
  // const [animeList, setAnimeList] = useState([]);
  const [animeAiring, setAnimeAiring] = useState([]);
 useEffect(()=>{
 axios.get('https://api.jikan.moe/v4/anime')
 .then((res)=>{
  let data = res.data.data;
  // setAnimeList(data);
  console.log(data);
  
  let animeAir = [];
            for(let i = 0; i < data.length; i++){
              if(data[i].title_english){
              
              }
              animeAir.push({
                name: data[i].title_english,
                airing: data[i].aired.from,
              });
            }
            animeAir.splice(1,2);
            console.log(animeAir);
           setAnimeAiring(animeAir)

});
 }, []);
//  const selectedAnime = useRef();
//  const [animeAir, setAnimeAir] = useState([]);
//  const pushedAnimeAiring = [];

// const outputAnimeAiring = () => {
//   let animeId = selectedAnime.current.value;
//   let chosenAnimeName = animeList.filter(item => item.mal_id == animeId);

//   axios.get('https://api.jikan.moe/v4/anime'+chosenAnimeName[0].mal_id)
//   .then((res)=>{
//   for(let i = 0; i < data.length; i++){

//   }
//    let data = res.data.data;
//    let airing = data.aired;
//     console.log(airing);
//    pushedAnimeAiring.push(airing);
//    setAnimeAir(pushedAnimeAiring);
  // console.log(animeAir);
  // });
  
// }
 

  return (
    <>
      <div className="main-container">
      <h1 className="table-heading-time">Airing Timeline</h1>
        <div className="linegraph">
        {/* <form>
            <select name="Animes" onChange={outputAnimeAiring} ref={selectedAnime}>
            <option>Select An Anime</option>
            {
                animeList.map((item, index) => <option key={index} value={item.mal_id} >{item.title}</option>)
            }
            </select>
            <br></br>
            <input
              className="compare-btn">
            </input>
          </form> */}
          <Line
            data={{
              labels: ["Started", "Ended"],
              datasets: [
                {
                  label: "Release Time",
                  data: [animeAiring],
                  backgroundColor: ["#CED6E0","#FF4757",],
                  borderColor: "#FFFFFF",
                  borderWidth: 1,
                },
              ],
            }}
          />
        </div>
      </div>
    </>
  );
};
export default Time;
