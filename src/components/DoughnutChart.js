import { Doughnut } from "react-chartjs-2";
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import 'chart.js/auto';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = (props) => { 

    const doughnut = props.doughnut;
    const labels = props.labels;

    const doughnutChartData = {
        labels: labels,
        datasets: [
          {
            data: doughnut,
            backgroundColor: [
              'rgba(67, 146, 176, 0.5)',
              'rgba(247, 242, 248, 0.5)',
            ],
            borderColor: [
                'rgba(67, 146, 176, 1)',
                'rgba(247, 242, 248, 1)',                
            ],
            borderWidth: 1,
          },
        ],
    }

    return (
        <div className="doughnutChart">
            <h3> Game Playtime </h3>                
            <div className="graph doughnut-graph">
                <Doughnut
                    data={doughnutChartData}
                />
            </div>
            <p> This graph compares the playtime of your chosen games. Hover on the graph for more info. </p>
        </div>
    )
}

export default DoughnutChart;