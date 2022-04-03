import "chart.js/auto";
import React from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";
import {useState, useRef, useEffect} from 'react';


const Comp = () => {
    const [animeList, setAnimeList] = useState([]);
    // const [animeListTwo, setAnimeListTwo] = useState([]);
    
    useEffect(()=>{ 
        axios.get("https://api.jikan.moe/v4/anime")
        .then((res) => {
            let data = res.data.data;
            setAnimeList(data);
            // setAnimeListTwo(data);
            console.log(data);
    });
}, []);


const selectedAnime = useRef(); 
// const selectedAnimeTwo = useRef(); 
const [animeNameOne, setAnimeNameOne] = useState([]);
const [userWatchingOne, setUserWatchingOne] = useState([]);
const [userCompletedOne, setUserCompletedOne] = useState([]);
const [userDroppedOne, setUserDroppedOne] = useState([]);
const[userPlannedToWatchOne, setUserPlannedToWatchOne] = useState([]);

const [userWatchingTwo, setUserWatchingTwo] = useState([]);
const [userCompletedTwo, setUserCompletedTwo] = useState([]);
const [userDroppedTwo, setUserDroppedTwo] = useState([]);
const[userPlannedToWatchTwo, setUserPlannedToWatchTwo] = useState([]);
const outputChosenAnime = () => { 
    let animeId = selectedAnime.current.value;
    let chosenAnimeName = animeList.filter(item => item.mal_id == animeId);

    // const outputChosenAnimeTwo = () => { 
    //     let animeId = selectedAnimeTwo.current.value;
    //     let chosenAnimeName = animeListTwo.filter(item => item.mal_id == animeId);
    
    axios.get("https://api.jikan.moe/v4/anime/"+chosenAnimeName[0].mal_id+"/statistics")
    .then((res)=>{
        let data =res.data.data;
        console.log(data);
        let watchingOne = data.watching;
        setUserWatchingOne(watchingOne);
        let completedOne = data.completed;
        setUserCompletedOne(completedOne);
        let droppedOne = data.dropped;
        setUserDroppedOne(droppedOne);
        let plannedOne = data.plan_to_watch;
        setUserPlannedToWatchOne(plannedOne);

        let watchingTwo = data.watching;
        setUserWatchingTwo(watchingTwo);
        let completedTwo = data.completed;
        setUserCompletedTwo(completedTwo);
        let droppedTwo = data.dropped;
        setUserDroppedTwo(droppedTwo);
        let plannedTwo = data.plan_to_watch;
        setUserPlannedToWatchTwo(plannedTwo);

    });
    setAnimeNameOne(chosenAnimeName);
    document.getElementById("animeNameOne").textContent = chosenAnimeName[0].title;
    // document.getElementById("animeNameTwo").textContent = chosenAnimeName[0].title;
    console.log(chosenAnimeName);
}
return (
    <>
      <div className="main-container">
        <h1 className="compare-heading">Choose Which Animes To Compare</h1>
        <div className="dropdown-one">
          <form>
            <select name="Animes" onChange={outputChosenAnime} ref={selectedAnime}>
            {
                animeList.map((item, index) => <option key={index} value={item.mal_id} >{item.title}</option>)
            }
            </select>
            <br></br>
            <input
              className="compare-btn"
              type="submit"
              value="Compare"
            ></input>
          </form>
        </div>
        <h2 className="vs">vs</h2>
        <div className="dropdown-two">
          <form>
            <select name="Animes" onChange={outputChosenAnime} ref={selectedAnime}>
            {
                animeList.map((item, index) => <option key={index} value={item.mal_id} >{item.title}</option>)
            }
            </select>
          </form>
        </div>

        <div className="doughnutGraph-one">
          <h1 className="table-heading" id="animeNameOne">Anime Name</h1>
          <Doughnut
            data={{
              labels: ["Watching", "Completed", "Dropped", "Plan To Watch"],
              datasets: [
                {
                  label: "# of Votes",
                  data: [userWatchingOne, userCompletedOne, userDroppedOne, userPlannedToWatchOne],
                  backgroundColor: ["#CED6E0", "#FF4757", "#7D8897", "#FF6B81"],
                  borderColor: [],
                  borderWidth: 1,
                },
              ],
            }}
          />

          <div className="doughnutGraph-two">
            <h1 className="table-heading">One Piece</h1>
            <Doughnut
              data={{
                labels: ["Watching", "Completed", "Dropped", "Plan To Watch"],
                datasets: [
                  {
                    label: "# of Votes",
                    data: [userWatchingTwo, userCompletedTwo, userDroppedTwo, userPlannedToWatchTwo],
                    backgroundColor: [
                      "#CED6E0",
                      "#FF4757",
                      "#7D8897",
                      "#FF6B81",
                    ],
                    borderColor: [],
                    borderWidth: 1,
                  },
                ],
              }}
            />
          </div>
        </div>

        <div className="pieGraph-one">
          <h1 className="table-heading">Users Favourites</h1>
          <Pie
            data={{
              labels: ["Naruto", "One Piece"],
              datasets: [
                {
                  label: "# of Favourites",
                  data: [98, 19],
                  backgroundColor: [
                    "#CED6E0",
                    "#FF4757",
                    "#A4B0BE",
                    "#FF6B81",
                    "#7D8897",
                    "#FFA1A9",
                  ],
                  borderColor: [],
                  Color: ["#ffa502"],
                  borderWidth: "none",
                },
              ],
            }}
            height={400}
            width={600}
            options={{ maintainAspectRatio: false }}
          />
        </div>

        <div className="barGraph">
          <h1 className="table-heading">Users Favourites</h1>
          <Bar
            data={{
              labels: ["Naruto", "One Piece"],
              datasets: [
                {
                  label: "# of Favourites",
                  data: [12, 19],
                  backgroundColor: [
                    "#CED6E0",
                    "#FF4757",
                    "#A4B0BE",
                    "#FF6B81",
                    "#7D8897",
                    "#FFA1A9",
                  ],
                  borderColor: [],
                  Color: ["#ffa502"],
                  borderWidth: "none",
                },
              ],
            }}
            height={400}
            width={600}
            options={{ maintainAspectRatio: false }}
          />
        </div>

        <div className="pieGraph-two">
          <h1 className="table-heading">Users Favourites</h1>
          <Pie
            data={{
              labels: ["Naruto", "One Piece"],
              datasets: [
                {
                  label: "# of Favourites",
                  data: [98, 19],
                  backgroundColor: [
                    "#CED6E0",
                    "#FF4757",
                    "#A4B0BE",
                    "#FF6B81",
                    "#7D8897",
                    "#FFA1A9",
                  ],
                  borderColor: [],
                  Color: ["#ffa502"],
                  borderWidth: "none",
                },
              ],
            }}
            height={400}
            width={600}
            options={{ maintainAspectRatio: false }}
          />
        </div>
      </div>
    </>
  );
};

export default Comp 
