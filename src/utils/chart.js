// export function updateChart() {
//   selectDataForTimeRange()
//   drawChart()
// }

// Generate Chart with Google Charts
// export function drawChart() {
//   let chartData = google.visualization.arrayToDataTable(displayData)
//   const options = createChartOptions(page)
//   chart.draw(chartData, options)
//   document.querySelector('svg').setAttribute('style', 'border-radius: 1rem')
// }

export function createChartOptions(page) {
  const explorerOptions = {
    explorer: {
      axis: 'horizontal',
      actions: ['dragToZoom', 'rightClickToReset'],
      keepInBounds: true,
    },
  }
  const commonOptions = {
    titleTextStyle: { color: 'white' },
    curveType: 'function',
    legend: 'none',
    backgroundColor: { fill: 'black' },
    colors: ['white'],
    vAxis: { textStyle: { color: 'white' } },
    hAxis: { textStyle: { color: 'white' } },
  }
  let options = {}
  switch (page) {
    case 'Stocks':
      options = {
        title: `Name of Stock Input Stock Price (USD)`,
        ...commonOptions,
        ...explorerOptions,
      }
      break
    case 'Currency':
      options = {
        title: `Name of Currency Input Currency Exchange Rate`,
        ...commonOptions,
        ...explorerOptions,
      }
      break
    case 'Government Data':
      options = {
        title: 'Macro Data %',
        ...commonOptions,
      }
      break
  }
  return options
}
