// const POLYGON_APIKEY = 'TTNbgrcWIJyP1tavyIdjxgTywo6ixljm'
const ALPHA_VANTAGE_APIKEY = '0BGSBFE3M96OL784'
const BEA_APIKEY = 'D34BBF56-E892-4E7A-9427-83869BD3A09D'
const FINNHUB_APIKEY = 'cf2ap1aad3idqn4q4nlgcf2ap1aad3idqn4q4nm0'

export async function getAlphaVantageStock(ticker) {
  let response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${ticker}&outputsize=full&apikey=${ALPHA_VANTAGE_APIKEY}`)
  let rawData = await response.json()
  return handleErrorAlphaVantage(rawData) ? parseAlphaVantage(rawData, 'Time Series (Daily)') : false
}

export async function getAlphaVantageForex(toCurrency, fromCurrency) {
  let response = await fetch(`https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=${fromCurrency}&to_symbol=${toCurrency}&outputsize=full&apikey=${ALPHA_VANTAGE_APIKEY}`)
  let rawData = await response.json()
  return handleErrorAlphaVantage(rawData) ? parseAlphaVantage(rawData, 'Time Series FX (Daily)') : false
}

function handleErrorAlphaVantage(data) {
  if (Object.keys(data).length === 0 || data['Error Message'] !== undefined) {
    // addAlert('Please Enter A Valid Stock Ticker')
    return false
  }
  return true
}

function parseAlphaVantage(rawData, dataKey) {
  let data = rawData[dataKey]
  let parsedData = []
  let keys = Object.keys(data)
  for (let i = keys.length - 1; i >= 0; i--) {
    let time = new Date(keys[i])
    let value = +data[keys[i]]['4. close']
    parsedData.push([time, value])
  }
  return parsedData
}

export async function getBEA(input) {
  const MacroDataTableName = {
    'GDP Annually': 't10101',
    'PCE Annually': 't20301',
    'GDP Quarterly': 't10101',
    'PCE Quarterly': 't20301',
  }
  const frequency = input[0].endsWith('Quarterly') ? 'q' : 'a'
  const url = `https://apps.bea.gov/api/data/?UserID=${BEA_APIKEY}&method=getDATA&datasetname=nipa&TABLENAME=${MacroDataTableName[input[0]]}&FREQUENCY=${frequency}&YEAR=ALL`
  const response = await fetch(url)
  const data = await response.json()
  return handleErrorBEA(data) ? parseBEA(data) : false
}

function handleErrorBEA(rawData) {
  if (rawData.BEAAPI.Error) {
    // Add Alert?
    return false
  }
  return true
}

function parseBEA(rawData) {
  const data_temp = rawData.BEAAPI.Results.Data
  const parsedData = []
  for (let i = 0; i < data_temp.length; i++) {
    if (data_temp[i].LineNumber !== '1') {
      break //only take line1 which is the real GDP data
    }
    parsedData.push([data_temp[i].TimePeriod, Number(data_temp[i].DataValue)])
  }
  return parsedData
}

export async function getFinnhub(ticker) {
  let response = await fetch(`https://finnhub.io/api/v1/quote?symbol=${ticker}&token=${FINNHUB_APIKEY}`)
  if (response.status === 429) return
  let data = await response.json()
  return parseFinnhub(ticker, data)
}

function parseFinnhub(ticker, data) {
  let parsedData = {
    ticker,
    incPercent: Math.round(data.dp * 100) / 100,
  }
  return parsedData
}
