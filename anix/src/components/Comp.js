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
        <div className="componentInterior">
        <Bar 
            data={{
                labels: ['One', 'Two', 'Three', 'Four', 'Five', 'Six'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        '#CED6E0',
                        '#FF4757',
                        '#A4B0BE',
                        '#FF6B81',
                        '#7D8897',
                        '#FFA1A9'
                    ],
                    borderColor: [
                        '#A4B0BE',
                        '#FF2639',
                        '#FF6B81',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
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