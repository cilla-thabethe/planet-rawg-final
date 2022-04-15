import { Radar } from "react-chartjs-2";
import 'chart.js/auto';
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);


const Platforms = (props) => {

    const parentPlatforms = props.parentPlatforms; 
    const platformCount = props.platformCount;

    const radarChartData = {

        labels: parentPlatforms,
        datasets: [
          {
            label: 'Number of Platforms',
            data: platformCount,
            backgroundColor: 'rgba(67, 146, 176, 0.5)',
            borderColor: 'rgba(67, 146, 176, 1)',
            borderWidth: 1,
          },
        ],
    
    }

    return(
        <div className="totalGenresSummary">
        <div className="barChart">
            <h3>Parent Platforms</h3>
            <div className="graph">
                <Radar
                    data={radarChartData}
                />
            </div>
            <p>This graph shows all the parent gaming platforms. Hover over the graph to find out more</p>
        </div>
        </div>
    )
}

export default Platforms;