// Global Variables
let global = {
  data: undefined,
  dataInTimePeriodIndex: 0,
  stockHistory: undefined,
  currencyHistory: undefined,
  chartName: undefined,
}

// Initialize
init()

//////////////////////////////////////////////// Initialization Functions /////////////////////////////////////////////////////////////////////

async function init() {
  getHistory()
  createWelcome()
  getContinuousStocks()
}

////////////////////////////////////////////////// Functions to Handle Inputs /////////////////////////////////////////////////////////////////////

function handlePage(e) {
  if (global.selectedPage === 'Government Data') {
    global.selectedTimePeriod = '200-y'
  } else if (global.selectedTimePeriod === '200-y') {
    global.selectedTimePeriod = '3-m'
  }
  changeUIforPage(e.target)
  clearChart()
  createWelcome()
}

function handleTime(e) {
  if (global.data !== undefined) updateChart()
}

function handleDefault(e) {
  if (e.target.dataset.value === undefined) return
  let input = e.target.dataset.value
  handleData(input)
}

function handleSearch(e) {
  if (e.key !== 'Enter') return
  let search = searchInput.value
  searchInput.value = ''
  handleData(inputValidation(search))
}

function inputValidation(input) {
  input = input.toString().toUpperCase()
}

function handleSelect(e) {
  let fromCurrency = e.target.parentElement.previousElementSibling.children[1]
  let toCurrency = e.target.parentElement.previousElementSibling.previousElementSibling.children[1]
  if (fromCurrency.value === '' || toCurrency.value === '') {
    addAlert('Please Choose Two Currencies')
    return
  }
  handleData(`${toCurrency.value}/${fromCurrency.value}`)
}

async function handleData(input) {
  clearChart()
  addLoadingSymbol()
  let success = await getData(input)
  if (success) {
    clearChart()
    global.chartName = input
    updateChart()
    addHistory(input)
  } else {
    createWelcome()
  }
}

///////////////////////////////////////////////////////// UI Functions /////////////////////////////////////////////////////////////////////

function changeUIforPage(page) {
  if (page.dataset.value === 'Stocks') {
    enable(threeMonBtn, sixMonBtn, ytd, oneYBtn, threeYBtn)
    disable(allBtn)
  }
  if (page.dataset.value === 'Currency') {
    enable(threeMonBtn, sixMonBtn, ytd, oneYBtn, threeYBtn)
    disable(allBtn)
  }
  if (page.dataset.value === 'Government Data') {
    disable(threeMonBtn, sixMonBtn, ytd, oneYBtn, threeYBtn)
    enable(allBtn)
  }
}

function enable(s_1, s_2, s_3, s_4, s_5) {
  for (let i = 0; i < arguments.length; i++) {
    arguments[i].classList.remove('disabled')
  }
}

function disable(s_1, s_2, s_3, s_4, s_5) {
  for (let i = 0; i < arguments.length; i++) {
    arguments[i].classList.add('disabled')
  }
}

function addLoadingSymbol() {
  chartContainer.innerHTML = `
    <div id="loading" class="spinner-border" style="width: 5rem; height: 5rem;" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    `
}

function addAlert(alertText) {
  // Limit of 1 alert
  if (searchDefault.children[2].id === 'alert') return
  // Create alert
  let alert = document.createElement('div')
  alert.id = 'alert'
  alert.className = 'alert alert-danger mb-1 text-center'
  alert.textContent = alertText
  // Insert alert in space between containers
  if (global.selectedPage === 'Currency') {
    let currencyContainer = document.querySelector('#currencyInputs')
    currencyContainer.className = 'card default-card mb-1'
  } else if (global.selectedPage === 'Stocks') {
    searchInput.className = 'form-control mb-1'
  }
  searchDefault.insertBefore(alert, alertReference)
  // Remove after 3 seconds
  setTimeout(removeAlert, 3000)
}

function removeAlert() {
  searchDefault.removeChild(document.querySelector('#alert'))
  if (global.selectedPage === 'Currency') {
    let currencyContainer = document.querySelector('#currencyInputs')
    currencyContainer.className = 'card default-card mb-5'
  } else if (global.selectedPage === 'Stocks') {
    searchInput.className = 'form-control mb-5'
  }
}

/////////////////////////////////////////// Welcome and History Functions /////////////////////////////////////////////////////////////////////

function createWelcome() {
  let selectedHistory = global.selectedPage === 'Stocks' ? 'stockHistory' : 'currencyHistory'
  let pageHistory = global[selectedHistory]
  if (global.selectedPage === 'Government Data') {
    // Government data page
    chartContainer.innerHTML = `
          <div id="welcome" class="container">
            <h2>Welcome to the ${global.selectedPage} Page</h2>
            <p>Choose whatever data you would like to see from our options on the left.</p>
          </div>
          `
  } else if (pageHistory === null || pageHistory === undefined || pageHistory.length === 0) {
    // Stock and currency pages without history
    let pageSpecificMessage
    switch (global.selectedPage) {
      case 'Stocks':
        pageSpecificMessage = 'Use the search bar to search for stocks by ticker or choose one of our popular options.'
        break
      case 'Currency':
        pageSpecificMessage = 'Choose which currency you would like to change from and to or choose one of our popular options'
        break
    }
    chartContainer.innerHTML = `
      <div id="welcome" class="container">
        <h2>Welcome to the ${global.selectedPage} Page</h2>
        <p>Your history is empty. ${pageSpecificMessage}</p>
      </div>
      `
  } else {
    // Stock and currency with history
    let historyBtns = ''
    for (let i = 0; i < pageHistory.length; i++) {
      historyBtns += `<button id="${pageHistory[i].split('/').join('')}History" data-value="${pageHistory[i]}" class="btn btn-dark rounded-1 clickHighlight">${pageHistory[i]}</button>`
    }
    chartContainer.innerHTML = `
      <div id="welcome" class="container">
        <h2>Welcome to the ${global.selectedPage} Page</h2>
        <div class="container" style="padding: 1.5rem;">
          <h4>Recently Searched</h4>
          <div class="d-grid gap-2" style="width: 12rem;">
            ${historyBtns}
            <button id="clearHistory" class="btn btn-danger rounded-1">Clear History</button>
          </div>
        </div>
      </div>
      `
    for (let i = 0; i < pageHistory.length; i++) {
      let historyBtn = document.querySelector(`#${pageHistory[i].split('/').join('')}History`)
      historyBtn.addEventListener('click', handleDefault)
    }
    let clearHistoryBtn = document.querySelector('#clearHistory')
    clearHistoryBtn.addEventListener('click', clearHistory)
  }
}

function saveHistory() {
  localStorage.setItem('stockHistory', JSON.stringify(global.stockHistory))
  localStorage.setItem('currencyHistory', JSON.stringify(global.currencyHistory))
}

function getHistory() {
  global.stockHistory = JSON.parse(localStorage.getItem('stockHistory'))
  global.currencyHistory = JSON.parse(localStorage.getItem('currencyHistory'))
}

function addHistory(input) {
  if (global.selectedPage === 'Government Data') return
  let selectedHistory = global.selectedPage === 'Stocks' ? 'stockHistory' : 'currencyHistory'
  let pageHistory = global[selectedHistory]
  if (pageHistory !== null && pageHistory !== undefined) {
    for (let i = 0; i < pageHistory.length; i++) {
      if (pageHistory[i] === input) {
        pageHistory.splice(i, 1)
      }
    }
    if (pageHistory.length > 5) pageHistory.pop()
    pageHistory.unshift(input)
  } else {
    pageHistory = [input]
  }
  global[selectedHistory] = pageHistory
  saveHistory()
}

function clearHistory() {
  global.stockHistory = []
  global.currencyHistory = []
  saveHistory()
  clearChart()
  createWelcome()
}

//////////////////////////////////////////////////////// Finnhub API Functions /////////////////////////////////////////////////////////////////////

async function getFinnhub(ticker) {
  let response = await fetch(`https://finnhub.io/api/v1/quote?symbol=${ticker}&token=${finnhub_APIKEY}`)
  if (response.status === 429) return '429 Error'
  let data = await response.json()
  return data
}

function parseFinnhub(ticker, data) {
  let parsedData = {
    ticker,
    incPercent: Math.round(data.dp * 100) / 100,
  }
  return parsedData
}

async function getContinuousStocks() {
  let error429 = false
  let continuousStocks = ['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOGL', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'JPM', 'META', 'V', 'PG', 'NVDA']
  let continuousData = []
  for (let i = 0; i < continuousStocks.length; i++) {
    let data = await getFinnhub(continuousStocks[i])
    if (data === '429 Error') {
      error429 = true
      break
    }
    let parsedData = parseFinnhub(continuousStocks[i], data)
    continuousData.push(parsedData)
  }
  if (error429 === true) {
    continuousData = await importTestData('./testData/testContinuousStockData.json')
  }
  if (scrollingData.innerHTML === '') {
    createContinuousStocks(continuousData, error429)
  } else {
    updateContinuousStocks(continuousData, error429)
  }
  setTimeout(getContinuousStocks, 60000)
}

function createContinuousStocks(continuousData, error429) {
  if (error429 === true) {
    scrollingData.innerHTML += `
      <div id="error429" class="bg-danger card continuousStockError">
        <div class="card-body text-dark d-flex justify-content-between align-items-center py-1">
          <i class="fa-solid fa-circle-exclamation"></i>
          <span>API Calls Exceeded - Loading Test Data</span>
        </div>
      </div>
      `
  }
  for (let i = 0; i < continuousData.length; i++) {
    let stock = continuousData[i]
    let color = stock.incPercent > 0 ? 'text-success' : 'text-danger'
    let chevron = stock.incPercent > 0 ? 'fa-chevron-up' : 'fa-chevron-down'
    let id = stock.ticker === 'BRK.B' ? 'BRK' : stock.ticker
    scrollingData.innerHTML += `
      <div id="${id}" class="bg-dark card continuousStock">
        <div class="card-body ${color} d-flex justify-content-between py-1">
          <span>${stock.ticker}</span>
          <i class="fas ${chevron}"></i>
          <span>${stock.incPercent}%</span>
        </div>
      </div>
      `
  }
}

function updateContinuousStocks(continuousData, error429) {
  if (error429) return
  if (document.querySelector('#error429') !== null) {
    document.querySelector('#scrolling').removeChild(document.querySelector('#error429'))
  }
  for (let i = 0; i < continuousData.length; i++) {
    let stock = continuousData[i]
    let id = stock.ticker === 'BRK.B' ? 'BRK' : stock.ticker
    let cardBodyHTML = document.querySelector(`#${id}`).children[0]
    let color = stock.incPercent > 0 ? 'text-success' : 'text-danger'
    cardBodyHTML.className = `card-body ${color} d-flex justify-content-between py-1`
    let chevronHTML = cardBodyHTML.children[1]
    let chevron = stock.incPercent > 0 ? 'fa-chevron-up' : 'fa-chevron-down'
    chevronHTML.className = `fas ${chevron}`
    let incHTML = cardBodyHTML.children[2]
    incHTML.innerHTML = `${stock.incPercent}%`
  }
}

//////////////////////////////////////////////////////// Test Data Loading Function /////////////////////////////////////////////////////////////////////

async function importTestData(url) {
  let testDataPromise = await fetch(url)
  let testData = await testDataPromise.json()
  return testData
}
