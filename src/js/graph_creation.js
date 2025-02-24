import { data } from "./setup.js";
import { config } from "./config.js";


document.getElementById('viewExplaination').addEventListener("click", () => {
    startExplaination();
})

function startExplaination() {
    document.getElementById('canvas-content').innerHTML = `
        <div id="chart-container"> 
            <canvas id="myChart"></canvas>
        </div> 
    `;
    // TODO: Edit the controls to show the next level button
    document.getElementById('controls').innerHTML = `
        <button onclick="startExplaination()" id="viewExplaination">View Explaination</button>
        <button onclick="generateCenario()">Next Level</button>
    `;
    createChart();
}

function createChart() {
    config.data = data;

    document.addEventListener("DOMContentLoaded", () => {
        const ctx = document.getElementById("myChart").getContext("2d");
        new Chart(ctx, config);
    });
}