import 'chart.js/auto';
import React from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';

axios.get("https://api.jikan.moe/v4/anime")
.then((res)=>{
    let name = res.data.data[0].title
})

const Comp = ()=>{
    
    return(
        
        <>
        <div className="main-container">
            <h1 className='compare-heading'>Choose An Anime To Compare</h1>
        <div className='dropdown-one'>
            <form>
                <select name="Animes">
                    <option value="Naruto">Naruto</option>
                    <option value="One Piece">One Piece</option>
                    <option value="Cowboy Bebop">CowBoy Bebop</option>
                    <option value="Trigun">Trigun</option>
                    <option value="Bouken Ou Beet">Bouken Ou Beet</option>
                    <option value="Initial D">Initial D</option>
                </select>
                <br></br>
                <input className='compare-btn' type="submit" value="Compare"></input>
            </form>
        </div>
        <h2 className='vs'>vs</h2>
        <div className='dropdown-two'>
            <form>
                <select name="Animes">
                    <option value="Naruto">Naruto</option>
                    <option value="One Piece">One Piece</option>
                    <option value="Cowboy Bebop">CowBoy Bebop</option>
                    <option value="Trigun">Trigun</option>
                    <option value="Bouken Ou Beet">Bouken Ou Beet</option>
                    <option value="Initial D">Initial D</option>
                </select>
            </form>
        </div>

        <div className='doughnutGraph-one'>
        <h1 className='table-heading'>Naruto</h1>
        <Doughnut data = {{
        labels: ['Watching','Completed','Dropped','Plan To Watch'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 15, 18],
            backgroundColor: [
                '#CED6E0',
                '#FF4757',
                '#7D8897',
                '#FF6B81',
            ],
            borderColor: [
                
            ],
            borderWidth: 1
        }]
    }}
    />

    <div className='doughnutGraph-two'>
    <h1 className='table-heading'>One Piece</h1>
        <Doughnut data = {{
        labels: ['Watching','Completed','Dropped','Plan To Watch'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 15, 18],
            backgroundColor: [
                '#CED6E0',
                '#FF4757',
                '#7D8897',
                '#FF6B81',
            ],
            borderColor: [
                
            ],
            borderWidth: 1
        }]
    }}
    />
    </div>
        </div>

        <div className="barGraph">
            <h1 className='table-heading'>Users Favourites</h1>
        <Bar 
            data={{
                labels: ['Naruto', 'One Piece'],
                datasets: [{
                    label: '# of Favourites',
                    data: [12, 19],
                    backgroundColor: [
                        '#CED6E0',
                        '#FF4757',
                        '#A4B0BE',
                        '#FF6B81',
                        '#7D8897',
                        '#FFA1A9',
                    ],
                    borderColor: [
                    ],
                    Color:[
                        "#ffa502"
                    ],
                    borderWidth: "none"
                },
            
            ],
            }} 
            height={400} 
            width={600} 
            options={{maintainAspectRatio: false,}}
            />
            </div>

        </div>
        </>
    )

}

export default Comp