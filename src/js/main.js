let winner = null;
let oneTImeInvestment = [];
let monthlyInvestment = [];

// Starts the game
function startGame() {
    document.getElementById('canvas-content').textContent = 'A random scenario awaits—choose the strategy you believe grows wealth faster. Trust your gut, and if you miss, coffee\'s on you (or share the fun)! 🚀';
    document.getElementById('controls').innerHTML = '<button onclick="generateCenario()">Generate Cenario</button>';
}

// Generate random data (like principal amount, rate, time, etc.)
// TODO: Level algo implementation
function generateRandomData(level = 0) {
    let minAmount = 100_000;
    let maxAmount = 5_00_000;

    const oneTimeAmount = Math.floor(Math.random() * (maxAmount/minAmount - minAmount/minAmount) + minAmount/minAmount)*1_00_000;

    const oneTimeRate = Math.floor(Math.random() * (25 - 6) + 5);
    const oneTimeYears = Math.floor(Math.random() * (80 - 5) + 5);

    const monthlyAmount = Math.floor(Math.random() * (3000 - 1000) + 1000);
    let monthlyRate;  // Declare outside to avoid scope issues
    if (level === 0) {
        monthlyRate = oneTimeRate;
    } else {
        monthlyRate = Math.floor(Math.random() * 5) + 1;
    }
    const monthlyYears = oneTimeYears;

    return {
        oneTimeAmount,
        oneTimeRate,
        oneTimeYears,
        monthlyAmount,
        monthlyRate,
        monthlyYears
    };
}

/* Uses random data to generate a scenario
    - Displays the scenario on the canvas
    - Displays the options to choose from
    - Calls the checkWinner function on click
    - Calls the generateCenario function on click 
*/ 
function generateCenario() {
    // Generate random data
    const data = generateRandomData();
    updateReturns(data);
    updateWinner();

    // Inject data into the canvas content
    document.getElementById('canvas-content').innerHTML = `
        <div id="gameCanvas">
            <div id="oneTimeInvestmentId">
                <p>💰 <strong>One-Time Investment:</strong> You have <span id="oneTimeAmount">$${data.oneTimeAmount}</span> to invest upfront at <span id="oneTimeRate">${data.oneTimeRate}%</span> annual return for <span id="oneTimeYears">${data.oneTimeYears}</span> years.</p>
            </div>

            <div id="monthlyInvestmentId">
                <p>📈 <strong>Monthly Investment:</strong> You invest <span id="monthlyAmount">$${data.monthlyAmount}</span> every month at <span id="monthlyRate">${data.monthlyRate}%</span> annual return for <span id="monthlyYears">${data.monthlyYears}</span> years.</p>
            </div>

            <p><strong>Which strategy will grow your money more? 🤔 Choose wisely!</strong></p>
        </div>
    `;
 

    document.getElementById('controls').innerHTML = `
        <button onclick="checkWinner(userInput='oneTime')">One-Time Investment</button> 
        <button onclick="checkWinner(userInput = 'monthly')">Long-Term Investment</button>
        <button onclick="generateCenario()">Change Question</button>
    `;

    
        // Adding checkWinner function to the canvas on click
    document.getElementById('oneTimeInvestmentId').addEventListener('click', () => checkWinner(userInput = 'oneTime'));
    document.getElementById('monthlyInvestmentId').addEventListener('click', () => checkWinner(userInput = 'monthly'));  
}

/*
Designed to check if the user has chosen the right strategy
- If the user has chosen the right strategy, a congratulatory message is displayed
- If the user has chosen the wrong strategy, a oops message is displayed
*/
// TODO: Add explaination for the right and wrong strategy
function checkWinner(userInput) {
    console.log("event listener working");
    if(winner == userInput){
        document.getElementById('canvas-content').innerHTML = `
            <p>🎉 Congratulations! You've chosen the right strategy. Your investment has grown more than the other strategy.</p>
        `;
        document.getElementById('controls').innerHTML = `
            <button  id="viewExplaination">View Explaination</button>
            <button onclick="generateCenario()">Next Level</button>
        `;
    }
    else{
        document.getElementById('canvas-content').innerHTML = `
            <p>😢 Oops! You've chosen the wrong strategy. Your investment has grown less than the other strategy.</p>
        `;
        document.getElementById('controls').innerHTML = `
            <button onclick="">View Explaination</button>
            <button onclick="generateCenario()">Try Again</button>
        `;
    }
    
}


// Helper functions
function updateReturns(data){
    for(let year = 1; year <= data.oneTimeYears; year++) {

        oneTImeInvestment.push(compountIntrest(data.oneTimeAmount, data.oneTimeRate, year));
    }
    for(let year = 1; year <= data.monthlyYears; year++) {
        if(year == 1){
            monthlyInvestment.push(compountIntrest(data.monthlyAmount * 12, data.monthlyRate, 1));
        }
        else{
            monthlyInvestment.push(compountIntrest(monthlyInvestment[year - 2] + data.monthlyAmount * 12, data.monthlyRate, 1));
        }
    }
    console.log(oneTImeInvestment);
    console.log(monthlyInvestment);
}

function updateWinner(){
    // function must be called after updateReturns
    if(oneTImeInvestment[oneTImeInvestment.length - 1] > monthlyInvestment[monthlyInvestment.length - 1]){
        winner = 'oneTime';
    }
    else{
        winner = 'monthly';
    }
    console.log(winner);
}

function compountIntrest(principal, rate, time) {
    n = 1;
    return principal * (Math.pow((1 + rate / n), n*time));
}

// Testing functions - not for production
function testAccuracy() {
    let noOfLongTermWins = 0;
    let noOfShortTermWins = 0;
    console.log('Testing accuracy of the game...');
    for (let i = 0; i < 1000; i++) {
        data = generateRandomData();
        updateReturns(data);
        updateWinner();
        if (winner == 'oneTime') {
            noOfLongTermWins++;
        } else {
            noOfShortTermWins++;
        }
    }
    console.log(`Long term wins: ${noOfLongTermWins}`);
    console.log(`Short term wins: ${noOfShortTermWins}`);
}