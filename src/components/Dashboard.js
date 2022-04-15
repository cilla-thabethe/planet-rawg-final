import './dashboard.css';
import Footer from './Footer';
import Playtime from './Playtime';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Publishers from './Publishers';
import img from "./assets/header-image.png"
import Platforms from './Platforms';
import SubReddit from './SubReddit';

const Dashboard = () => {

    const [totalPlaytime, setTotalPlaytime] = useState(0);
    const [totalPublishers, setTotalPublishers] = useState(0);
    const [parentPlatforms, setParentPlatforms] = useState([]);
    const [platformCount, setPlatformCount] = useState([]);
    
    useEffect(() => {
        axios.get('https://api.rawg.io/api/games?key=1e4d58aac9244e33b6361a1cc1ee823c')
        .then((response) => {
            let data = (response.data.results);

            let playtime = 0;
            let total = 0;

            
            for (let i = 0; i < data.length; i++){
                playtime = data[i].playtime;
                total = total + playtime;
            }
            setTotalPlaytime(total)
        })
    }, [])

    useEffect(() => {
        axios.get('https://api.rawg.io/api/publishers?key=1e4d58aac9244e33b6361a1cc1ee823c')
        .then((response) => {
            let data = (response.data.results);

            let publishers = data.length;

            setTotalPublishers(publishers)
        })
    }, [])

    useEffect(() => {
        axios.get('https://api.rawg.io/api/platforms/lists/parents?key=1e4d58aac9244e33b6361a1cc1ee823c')
        .then((response) => {
            let data = (response.data.results);

            setParentPlatforms(data.map((item) => item.name))
            setPlatformCount(data.map((item) => item.platforms.length))
        })
    }, [])

    return(
        <div className="main-con">
            <div className="large-con">
                
                <div className="text-con">
                <h1>Welcome to Planet Rawg</h1>

                <p>Planet Rawg is where you can see the latest information about your favourite games from RAWG. 
                RAWG is the largest video game database and this website lets you find the information quicker!</p>
                </div>

                <div className='img-con'>
                    <img src={img} alt="" />
                </div>
            </div>

            <div className="medium-con platforms">
                <Platforms parentPlatforms={parentPlatforms} platformCount={platformCount} />
            </div>

            <div className="medium-con playtime">
                <Playtime totalPlaytime={totalPlaytime} />
            </div>

            <div className="medium-con publishers">
                <Publishers totalPublishers={totalPublishers}/>
            </div>

            <div className="medium-con subreddit-posts">
                <SubReddit/>
            </div>

            <div> <Footer/> </div>

        </div>
    )
}

export default Dashboard;