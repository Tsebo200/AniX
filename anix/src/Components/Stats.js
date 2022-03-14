import axios from 'axios'
axios.get("https://api.jikan.moe/v4/anime/20")
.then((response)=>{
    console.log(response)
})
.catch((err)=>{
    console.log(err)
});
const Stats =()=>{
    return(
        <div className="stat-container">
            <div className='statOne'><p className='type'>TV</p></div>
            <div className='statTwo'><p className='score'>Score</p></div>
            <div className='statThree'><p className='year'>Year</p></div>
            <div className='statFour'><p className='season'>Season</p></div>
        </div>
       
    );
}
export default Stats