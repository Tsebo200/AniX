import axios from 'axios'
axios.get("https://api.jikan.moe/v4/anime/20")
.then((response)=>{
    console.log(response)
})
.catch((err)=>{
    console.log(err)
});
const MainInfo =()=>{
    return(
        <div className='main-container'>
            <div className='mainInfo-container'>
            <div className="poster"></div>
            <div className="title"></div>
            <div className="synopsis"></div>
            </div>
        </div>
    );
}
export default MainInfo