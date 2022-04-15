import { Bar } from "react-chartjs-2";
import 'chart.js/auto';
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const BarChart = (props) => {

    const rating = props.rating;
    const metacriticRating = props.metacriticRating;
    const labels = props.labels;

    const barChartData = {
        labels: labels,
        datasets: [
          {
            indexAxis: 'y',
            label: 'Rating',
            data: rating,
            backgroundColor: 'rgba(67, 146, 176, 0.8)',
            borderColor: 'rgba(67, 146, 176, 1)',
      
          },
          {
            indexAxis: 'y',
            label: 'Metacritic Rating',
            data: metacriticRating,
            backgroundColor: 'rgba(247, 242, 248, 0.8)',
            borderColor: 'rgba(247, 242, 248, 1)',
          },
        ],
        options: {
            height:400,
            aspectRatio: 4, 
            responsive: true,
            maintainAspectRatio: true
          }
    }

    return (
        <div className="barChart">
            <h3>Ratings</h3>
            <div className="graph">
                <Bar
                    data={barChartData}
                />
            </div>
            <p>This bar graph compares the average rating given to the game by players and the metacritic rating. The metacritic rating is the rating given to the game by critics and publishers, hover over the graph to find out more.</p>
        </div>

    )
}

export default BarChart;