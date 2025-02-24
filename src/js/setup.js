import {main} from './main.js';

const YEARS_COUNT = main.oneTimeInvestment.length;
let gaps = YEARS_COUNT/10;
const labels = [];
for (let i = 0; i < YEARS_COUNT; i += gaps){
  labels.push(i.toString());    
}
const data = {
  labels: labels,
  datasets: [
    {
      label: 'Monthly Investment',
      data: main.monthyInvestment,
      borderColor: Utils.CHART_COLORS.red,
      fill: false,
      cubicInterpolationMode: 'monotone',
      tension: 0.4
    }, {
      label: 'One Time Investment',
      data: main.oneTimeInvestment,
      borderColor: Utils.CHART_COLORS.blue,
      fill: false,
      tension: 0.4
    }
  ]
};