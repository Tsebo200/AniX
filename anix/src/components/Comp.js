import 'chart.js/auto';
import React from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';

axios.get("https://api.jikan.moe/v4/anime")
.then((res)=>{
    
})

const Comp = ()=>{
    
    return(
        
        <>
        <div className="main-container">
        <div className='dropdown'>
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="/compare">Action</a></li>
    <li><a className="dropdown-item" href="/compare">Another action</a></li>
    <li><a className="dropdown-item" href="/compare">Something else here</a></li>
  </ul>
</div>
        <div className="componentInterior">
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