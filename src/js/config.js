import data from './setup.js';

// let config = {
//     type: 'line',
//     data: data,
//     options: {
//       responsive: true,
//       plugins: {
//         title: {
//           display: true,
//           text: 'Chart.js Line Chart - Cubic interpolation mode'
//         },
//       },
//       interaction: {
//         intersect: false,
//       },
//       scales: {
//         x: {
//           display: true,
//           title: {
//             display: true
//           }
//         },
//         y: {
//           display: true,
//           type: 'logarithmic',
//           title: {
//             display: true,
//             text: 'Value log scale'
//           },
//           ticks: {
//             stepSize: 1000  // Adjust based on your data range
//           },
//           beginAtZero: true ,
//           suggestedMin: -10,
//           suggestedMax: 200
//         }
//       }
//     },
//   };

const config = {
  type: 'line',
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart'
      }
    },
    scales: {
        x: {
          display: true,
          title: {
            display: true
          }
        },
        y: {
          display: true,
          type: 'linear',
          title: {
            display: true,
            text: 'Value log scale'
          },
          ticks: {
            stepSize: 10  // Adjust based on your data range
          },
          beginAtZero: true ,
          suggestedMin: -10,
          suggestedMax: 200
        }
      }
  },
};

export default config;