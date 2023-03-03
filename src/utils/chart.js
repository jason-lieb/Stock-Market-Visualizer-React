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
    case 'Currency':
      options = {
        ...commonOptions,
        ...explorerOptions,
      }
      break
    default:
      options = {
        ...commonOptions,
      }
      break
  }
  return options
}
