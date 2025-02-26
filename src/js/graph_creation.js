import createDataForGraph from "./setup.js";
import config from "./config.js";
import {oneTImeInvestment, monthlyInvestment} from "./data.js";


function startExplaination() {
    console.log('Starting explaination');
    document.getElementById('canvas-content').innerHTML = `
        <div id="chart-container"> 
            <canvas id="myChart"></canvas>
        </div> 
    `;
    // TODO: Edit the controls to show the next level button
    document.getElementById('controls').innerHTML = `
        <button onclick="generateCenario()">Next Level</button>
    `;
    createChart();
}

function createChart() {

    config.data = createDataForGraph(oneTImeInvestment, monthlyInvestment);
    console.log('data is  readed');
    console.log(config.data);
    // config.options.scales.y.suggestedMax = Math.max(oneTImeInvestment[oneTImeInvestment.length - 1], monthlyInvestment[monthlyInvestment.length - 1]);
    // config.options.scales.y.suggestedMin = Math.min(oneTImeInvestment[0], monthlyInvestment[0]);
    // config.options.scales.y.ticks.stepSize = Math.floor(config.options.scales.y.suggestedMax / 10);
    
    // document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("myChart").getContext("2d");
    new Chart(ctx, config);
    // });
}

export default startExplaination;
