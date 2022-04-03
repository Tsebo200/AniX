import "chart.js/auto";
import React from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";
import {useState, useRef, useEffect} from 'react';


const Comp = () => {
    const [animeList, setAnimeList] = useState([]);
    // I just changed animeNames to animeList because it gives it more context to what is actually stored in animeList.
    useEffect(()=>{ //I am putting the get request in a useEffect so that it gets all the animes when the page renders
        axios.get("https://api.jikan.moe/v4/anime")
        .then((res) => {
            let data = res.data.data;
            // I changed name to data
            setAnimeList(data);
            console.log(data);
    });
}, []);


const selectedAnime = useRef(); //The selected anime id will be stored in this variable
const [animeNameOne, setAnimeNameOne] = useState([]);
const [userWatchingOne, setUserWatchingOne] = useState([]);
const [userCompletedOne, setUserCompletedOne] = useState([]);
const [userDroppedOne, setuserDroppedOne] = useState([]);
const[userPlannedToWatchOne, setUserPlannedToWatchOne] = useState([]);
const outputChosenAnime = () => { // This is a function that will output the name of the Anime the user has chosen
    let animeId = selectedAnime.current.value;
    let chosenAnimeName = animeList.filter(item => item.mal_id == animeId);
    
    axios.get("https://api.jikan.moe/v4/anime/"+chosenAnimeName[0].mal_id+"/statistics")
    .then((res)=>{
        let data =res.data.data;
        console.log(data);
        let watchingOne = data.watching;
        setUserWatchingOne(watchingOne);
        let completedOne = data.completed;
        setUserCompletedOne(completedOne);
        let droppedOne = data.dropped;
        setuserDroppedOne(droppedOne);
        let plannedOne = data.plan_to_watch;
        setUserPlannedToWatchOne(plannedOne);

    });
    setAnimeNameOne(chosenAnimeName);
    document.getElementById("animeName").textContent = chosenAnimeName[0].title;
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
            <select name="Animes">
            {
                animeList.map((item, index) => <option key={index} value={item.mal_id} >{item.title}</option>)
            }
            </select>
          </form>
        </div>

        <div className="doughnutGraph-one">
          <h1 className="table-heading" id="animeName">Anime Name</h1>
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
                    data: [12, 19, 15, 18],
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

export default Comp;
