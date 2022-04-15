import { PolarArea } from "react-chartjs-2";
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import 'chart.js/auto';

ChartJS.register(ArcElement, Tooltip, Legend);

const PolarAreaChart = (props) => {

    const platforms = props.platforms;
    const labels = props.labels;

    const areaChart = {
        labels: labels,
        datasets: [
          {
            label: '',
            data: platforms,
            backgroundColor: [
                'rgba(67, 146, 176, 0.5)',
                'rgba(247, 242, 248, 0.5)',   

            ],
            borderColor: [
                'rgba(67, 146, 176, 1)',
                'rgba(247, 242, 248, 1)',   
            ],
          },
        ]
    }

    return ( 
        <div className="polarArea">
                <h3>Gaming Platforms</h3>
                <div className="graph">
                <PolarArea
                    data={areaChart}
                />
                <p> This graph compares the number of platforms the games are availible on. Hover on the graph for more info. </p>
            </div>

        </div>
    )
}
 
export default PolarAreaChart;