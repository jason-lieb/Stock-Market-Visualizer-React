function updateChart() {
  selectDataForTimeRange()
  drawChart()
}

// Generate Chart with Google Charts
function drawChart() {
  let chart = new google.visualization.LineChart(chartContainer)
  let displayData = global.data.slice(global.dataInTimePeriodIndex)
  if (global.selectedPage === 'Stocks' || global.selectedPage === 'Currency') {
    for (let i = 0; i < displayData.length; i++) {
      displayData[i][0] = new Date(displayData[i][0])
    }
  }
  displayData.unshift(['Time', 'Value'])
  let chartData = google.visualization.arrayToDataTable(displayData)
  let options = {}
  switch (global.selectedPage) {
    case 'Stocks':
      options = {
        title: `${global.chartName} Stock Price (USD)`,
        titleTextStyle: { color: 'white' },
        curveType: 'function',
        legend: 'none',
        backgroundColor: { fill: 'black' },
        colors: ['white'],
        vAxis: { textStyle: { color: 'white' } },
        hAxis: { textStyle: { color: 'white' } },
        explorer: {
          axis: 'horizontal',
          actions: ['dragToZoom', 'rightClickToReset'],
          keepInBounds: true,
        },
      }
      break
    case 'Currency':
      options = {
        title: `${global.chartName} Currency Exchange Rate`,
        titleTextStyle: { color: 'white' },
        curveType: 'function',
        legend: 'none',
        backgroundColor: { fill: 'black' },
        colors: ['white'],
        vAxis: { textStyle: { color: 'white' } },
        hAxis: { textStyle: { color: 'white' } },
        explorer: {
          axis: 'horizontal',
          actions: ['dragToZoom', 'rightClickToReset'],
          keepInBounds: true,
        },
      }
      break
    case 'Government Data':
      options = {
        title: 'Macro Data %',
        titleTextStyle: { color: 'white' },
        curveType: 'function',
        legend: 'none',
        backgroundColor: { fill: 'black' },
        colors: ['white'],
        vAxis: { textStyle: { color: 'white' } },
        hAxis: { textStyle: { color: 'white' } },
      }
      break
  }
  chart.draw(chartData, options)
  document.querySelector('svg').setAttribute('style', 'border-radius: 1rem')
}

function clearChart() {
  chartContainer.innerHTML = ``
}

export default { updateChart, drawChart, clearChart }
