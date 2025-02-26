import { oneTImeInvestment, monthlyInvestment } from "./data.js";

console.log(oneTImeInvestment);

function createDataForGraph(oneTImeInvestment, monthlyInvestment){
  let YEARS_COUNT = oneTImeInvestment.length;
  let gaps = YEARS_COUNT/10;
  let labels = [];
  for (let i = 0; i < YEARS_COUNT; i += gaps){
    labels.push(i.toString());    
  }
  // let  data = {
  //   labels: labels,
  //   datasets: [
  //     {
  //       label: 'Monthly Investment',
  //       data: monthlyInvestment,
  //       borderColor: 'rgb(255, 99, 132)',
  //       fill: false,
  //       cubicInterpolationMode: 'monotone',
  //       tension: 0.6
  //     }, {
  //       label: 'One Time Investment',
  //       data: oneTImeInvestment,
  //       borderColor: 'rgb(54, 162, 235)',
  //       fill: false,
  //       tension: 0.6
  //     }
  //   ]
  // };
  // return data;
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'monthlyInvestment 1',
        data: monthlyInvestment,
        borderColor: 'rgb(255, 99, 132)',
        // backgroundColor: Utils.transparentize('rgb(255, 99, 132)'),
      },
      {
        label: 'oneTImeInvestment 2',
        data: oneTImeInvestment,
        borderColor: 'rgb(54, 162, 235)',
        // backgroundColor: Utils.transparentize('rgb(54, 162, 235)'),
      }
    ]
  };
  return data;
}

export default createDataForGraph;