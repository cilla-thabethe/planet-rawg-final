import axios from "axios"; 
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'
import Footer from './Footer';
import 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import {useEffect, useState} from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

const Timeline = () => {


    const [gameName, setGameName] = useState([]);
    const [dateReleased, setDateReleased] = useState([]);
    // const [dateUpdated, setDateUpdated] =useState([]);

    useEffect(() => {
        axios.get('https://api.rawg.io/api/games?key=d6d637a3c4154e308ec668ef3c7f3271')
        .then((response) => {
            let gameData = response.data.results;

            console.log(gameData)

            setGameName(gameData.map((item) => item.name))

            const releaseYear = [];
            const updateYear = [];

            for(let i = 0; i < gameData.length; i++){
                releaseYear.push(
                    gameData[i].released.slice(0,4)
                )
                updateYear.push(
                    gameData[i].updated.slice(0,4)
                )
            }

            setDateReleased(releaseYear);
            // setDateUpdated(updateYear);
            
        })
    }, [])


    const lineChartOne = {
        labels: gameName,
        datasets: [
          {
            label: 'Game Release Dates',
            data: dateReleased,
            borderColor: 'rgb(67, 146, 176)',
            backgroundColor: 'rgb(67, 146, 176)',
          }
        ],
    }

    // const lineChartTwo = {
    //     labels: gameName,
    //     datasets: [
    //       {
    //         label: 'Dataset 2',
    //         data: dateUpdated,
    //         borderColor: 'rgb(25, 90, 130)',
    //         backgroundColor: 'rgba(25, 90, 130, 0.5)',
    //       },
    //     ],
    // }

    const options = {
        legend: {
          display: false
        }
    };
    
    return(
        <div className="main-con">
            <h1> Timeline </h1>

            <div className="large-con">
                <h3> Dates Released </h3>     
                <p>This timeline shows the years the games were released, hover on any point for more information </p>
                <div className="timelinegraph">
                    <div className="timeline">
                        <Line data={lineChartOne} options={options} />
                    </div>
                </div>
                <div className="text-con-timeline">
                </div>
              
            </div>    

            {/* <div className="large-con timeline">
                <h3> Dates Updated </h3>     
                <div className="timelinegraph">
                    <Line
                        data={lineChartTwo}
                    />
                </div>
                <p> words </p>
                
            </div>     */}

            <div> <Footer/> </div>
        </div>

    )
}

export default Timeline;