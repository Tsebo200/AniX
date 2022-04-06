import "chart.js/auto";
import React from "react";
import axios from "axios";
import { Bar, Doughnut, Pie } from "react-chartjs-2";
import {useState, useRef, useEffect} from 'react';


const Comp = () => {
    const [animeList, setAnimeList] = useState([]);
    
    useEffect(()=>{ 
        axios.get("https://api.jikan.moe/v4/anime")
        .then((res) => {
            let data = res.data.data;
            setAnimeList(data);
            console.log(data);
    });
}, []);


const selectedAnime = useRef(); 
const selectedAnimeTwo = useRef(); 
const [animeNameOne, setAnimeNameOne] = useState([]);
const [userWatchingOne, setUserWatchingOne] = useState([]);
const [userCompletedOne, setUserCompletedOne] = useState([]);
const [userDroppedOne, setUserDroppedOne] = useState([]);
const[userPlannedToWatchOne, setUserPlannedToWatchOne] = useState([]);

const [animeNameTwo, setAnimeNameTwo] = useState([]);
const [userWatchingTwo, setUserWatchingTwo] = useState([]);
const [userCompletedTwo, setUserCompletedTwo] = useState([]);
const [userDroppedTwo, setUserDroppedTwo] = useState([]);
const[userPlannedToWatchTwo, setUserPlannedToWatchTwo] = useState([]);
const outputChosenAnime = () => { 
    let animeId = selectedAnime.current.value;
    let animeIdTwo = selectedAnimeTwo.current.value;
    let chosenAnimeName = animeList.filter(item => item.mal_id == animeId);
    let chosenAnimeNameTwo = animeList.filter(item => item.mal_id == animeIdTwo);

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

    });
    axios.get("https://api.jikan.moe/v4/anime/"+chosenAnimeNameTwo[0].mal_id+"/statistics")
    .then((res)=>{
        let data =res.data.data;
        console.log(data);

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
    console.log(chosenAnimeName);

    setAnimeNameTwo(chosenAnimeName);
    document.getElementById("animeNameTwo").textContent = chosenAnimeNameTwo[0].title;
    console.log(chosenAnimeName);

}
return (
    <>
      <div className="main-container">
        <h1 className="compare-heading">Choose Which Animes To Compare</h1>
        <div className="dropdown-one">
          <form>
            <select name="Animes" onChange={outputChosenAnime} ref={selectedAnime}>
            <option>Select An Anime</option>
            {
                animeList.map((item, index) => <option key={index} value={item.mal_id} >{item.title}</option>)
            }
            </select>
            <br></br>
            <input
              className="compare-btn">
            </input>
          </form>
        </div>
        <h2 className="vs">vs</h2>
        <div className="dropdown-two">
          <form>
            <select name="Animes" onChange={outputChosenAnime} ref={selectedAnimeTwo}>
                <option>Select An Anime</option>
            {
                animeList.map((item, index) => <option key={index} value={item.mal_id} >{item.title}</option>)
            }
            </select>
          </form>
        </div>

        <div className="doughnutGraph-container">
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
            <h1 className="table-heading" id="animeNameTwo">Anime Name</h1>
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
        </div>

        <div className="pieGraph-one">
          <h1 className="table-heading">Users Favourites</h1>
          <Pie
            data={
                {
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    datasets: [
                      {
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                          'rgba(255, 99, 132, 0.2)',
                          'rgba(54, 162, 235, 0.2)',
                          'rgba(255, 206, 86, 0.2)',
                          'rgba(75, 192, 192, 0.2)',
                          'rgba(153, 102, 255, 0.2)',
                          'rgba(255, 159, 64, 0.2)',
                        ],
                        borderColor: [
                          'rgba(255, 99, 132, 1)',
                          'rgba(54, 162, 235, 1)',
                          'rgba(255, 206, 86, 1)',
                          'rgba(75, 192, 192, 1)',
                          'rgba(153, 102, 255, 1)',
                          'rgba(255, 159, 64, 1)',
                        ],
                        borderWidth: 1,
                      },
                    ],
                  }
            }
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
