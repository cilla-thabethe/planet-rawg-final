import Footer from './Footer';
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import DoughnutChart from "./DoughnutChart";
import PolarAreaChart from "./PolarAreaChart";
import BarChart from "./BarChart";
import './compare.css';
 

const DataComparison = () => {

    const [data, setData]= useState([]);
    const [gameOne, setGameOne] = useState([]);
    const [gameTwo, setGameTwo] = useState([]);
    const [gameNameOne, setGameNameOne] = useState([]);
    const [gameNameTwo, setGameNameTwo] = useState([]);
    const [playtimeOne, setPlaytimeOne] = useState();
    const [playtimeTwo, setPlaytimeTwo] = useState();
    const [platformsOne, setPlatformsOne] = useState();
    const [platformsTwo, setPlatformsTwo] = useState([]);
    const [metacriticOne, setMetacriticOne] = useState([]);
    const [metacriticTwo, setMetacriticTwo] = useState([]);
    const [ratingOne, setRatingOne] = useState([]);
    const [ratingTwo, setRatingTwo] = useState([]);

    const gameOneOptions = useRef();
    const gameTwoOptions = useRef();

    useEffect(() => {
        axios.get('https://api.rawg.io/api/games?key=1e4d58aac9244e33b6361a1cc1ee823c')
        .then((response) => {
            setData(response.data.results)   
        })
    }, [])
    
    const getOptions = () => {
        let gameOptions1 = gameOneOptions.current.value;
        let gameOptions2 = gameTwoOptions.current.value
        let indexTwoNum = 0;   
        let indexOneNum = 0;

        for (let i = 0; i < data.length; i++) {
            if(data[i].name === gameOptions1){
                indexOneNum = indexOneNum + i;
            }  
        }     
        
        for (let j = 0; j < data.length; j++) {
            if(data[j].name === gameOptions2){
                indexTwoNum = indexTwoNum + j;
            }  
        }     

        axios.get('https://api.rawg.io/api/games?key=1e4d58aac9244e33b6361a1cc1ee823c')
        .then((response) => {
            let gameData = response.data.results;
            const gameTwoData = [];
            let i = indexOneNum;
            let j = indexTwoNum;

            const gameOneData = [];

            gameOneData.push({
                name: gameData[i].name,
                id: gameData[i].id,
                backgroundImg: gameData[i].background_image,
                esrbRating: gameData[i].esrb_rating.name,
                lastUpdated: gameData[i].updated.slice(0,10),
            })

            gameTwoData.push({
                id: gameData[j].id,
                backgroundImg: gameData[j].background_image,
                esrbRating: gameData[j].esrb_rating.name,
                lastUpdated: gameData[j].updated.slice(0,10),
            })

            setMetacriticOne(gameData[i].metacritic);
            setMetacriticTwo(gameData[j].metacritic);

            setGameOne(gameOneData);
            setGameTwo(gameTwoData);

            setGameNameOne(gameData[i].name);
            setGameNameTwo(gameData[j].name);

            setPlaytimeOne(gameData[i].playtime)
            setPlaytimeTwo(gameData[j].playtime)

            setRatingOne(gameData[i].rating);
            setRatingTwo(gameData[j].rating);

            setPlatformsOne(gameData[i].platforms.length)
            setPlatformsTwo(gameData[j].platforms.length)
        }, [])
    }       
    
    let platforms = [platformsOne, platformsTwo];
    let metacriticRating = [metacriticOne, metacriticTwo];
    let doughnut = [playtimeOne, playtimeTwo];
    let labels = [gameNameOne, gameNameTwo];
    let rating = [ratingOne, ratingTwo];

    return (

        <div className="main-con">
            <h1> Data Comparison </h1>

            <div className="large-con info">
                <p>This is the data comparison page where you can compare the data of any two games</p>
            </div>

            <div className="medium-con">
                    
            <div className="gameOne">
                <div className="img-game-con">
                    <img src={gameOne.map((item => item.backgroundImg))}/>
                    <div className="overlay">

                        <div className="game-info" >
                            <select ref={gameOneOptions} onChange={getOptions} className="form-select">
                                {data.map((item) =><option key={item.id} >{item.name}</option>)}
                            </select>
                            <h4>{gameNameOne}</h4>
                            <p>Rating: {gameOne.map((item => item.esrbRating))}</p>
                            <p>Last Updated: {gameOne.map((item => item.lastUpdated))}</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>   

            <div className="medium-con">
            <div className="gameTwo">
        
                <div className="img-game-con">
                    <img src={gameTwo.map((item => item.backgroundImg))}/>
                    <div className="overlay">

                        <div className="game-info" >
                            <select ref={gameTwoOptions} onChange={getOptions} className="form-select">
                                {data.map((item) =><option key={item.id} >{item.name}</option>)}
                            </select>
                            <h4>{gameNameTwo}</h4>
                            <p>Rating: {gameTwo.map((item => item.esrbRating))}</p>
                            <p>Last Updated: {gameTwo.map((item => item.lastUpdated))}</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>   


            <div className="small-con doughnut-con">
                <DoughnutChart doughnut={doughnut} labels={labels}/>
            </div>    

            <div className="small-con area-con">
                <PolarAreaChart platforms={platforms} labels={labels}/>
            </div>

            <div className="small-con bar-con">
                <BarChart rating={rating} metacriticRating={metacriticRating} labels={labels}/>
            </div>


            <div> <Footer/> </div>
        </div>

    )
}

export default DataComparison;