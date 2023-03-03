import { getAlphaVantageStock, getAlphaVantageForex, getBEA } from './api'

export async function getData(input, page, setChartName) {
  let newData
  switch (page) {
    case 'Stocks':
      setChartName(`${input} Stock Price ($)`)
      newData = await getAlphaVantageStock(input)
      return newData
    case 'Currency':
      setChartName(`${input} Currency Exchange Rate`)
      const toCurrency = input.split('/')[0]
      const fromCurrency = input.split('/')[1]
      newData = await getAlphaVantageForex(toCurrency, fromCurrency)
      return newData
    case 'Government Data':
      const chartName = input[0].split(' ')[1] === 'Quarterly' ? input[0] : input[0].substr(0, input[0].length - 2)
      setChartName(`${chartName} Growth %`)
      newData = await getBEA(input)
      return newData
  }
}

// Create Subset of Data for Time Range
export function selectDataForTimeRange(data, selectedTimePeriod, page) {
  // Create variables for today
  let year = new Date().getFullYear()
  let month = new Date().getMonth() + 1
  let day = new Date().getDate()
  // Subtract out time period
  switch (selectedTimePeriod.split('')[1]) {
    case 'y':
      year -= selectedTimePeriod.split('')[0]
      break
    case 'm':
      if (selectedTimePeriod.split('')[0] >= month) {
        year -= 1
        month += 12 - selectedTimePeriod.split('')[0]
      }
      break
    case 'l':
      return 0
    default:
      month = 1
      day = 1
  }
  // Create Lower Bound for Time Range
  let timeBound = Date.parse(new Date(`${year}-${month}-${day}`))
  // Create Index for Data in Time Period
  let newDataIndex = 0
  let allData = true
  switch (page) {
    case 'Stocks':
    case 'Currency':
      for (let i = 0; i < data.length; i++) {
        if (data[i][0] < timeBound) {
          newDataIndex = i
          allData = false
        }
      }
      break
    case 'Government Data':
      for (let i = 0; i < data.length; i++) {
        if (Number(data[i][0].slice(0, 4)) < year) {
          newDataIndex = i
          allData = false
        }
      }
      break
  }
  if (!allData) newDataIndex += 1
  return newDataIndex
}

// async function getContinuousStocks() {

// }
