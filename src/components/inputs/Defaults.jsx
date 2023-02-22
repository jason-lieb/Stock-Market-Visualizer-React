import DefaultButton from './DefaultButton'

export default function Defaults({ currentPage, setData }) {
  const defaultStocks = ['AMZN', 'AAPL', 'GOOG', 'META', 'NFLX', 'TSLA', 'NVDA', 'MSFT', 'DIS', 'GME']
  const defaultCurrencies = ['EUR/USD', 'GBP/USD', 'CAD/USD', 'AUD/USD', 'CNY/USD', 'JPY/USD']
  const defaultGovernment = [
    ['GDP Annually', 'Gross Domestic Product'],
    ['GDP Quarterly', 'Gross Domestic Product'],
    ['PCE Annually', 'Personal Consumption Expenditures'],
    ['PCE Quarterly', 'Personal Consumption Expenditures'],
  ]

  function renderDefaultNames(currentPage) {
    switch (currentPage) {
      case 'Stocks':
        return 'Popular Stocks'
      case 'Currency':
        return 'Popular Conversions'
      case 'Government Data':
        return 'US Government Statistics'
    }
  }

  function renderButtons(currentPage) {
    switch (currentPage) {
      case 'Stocks':
        return defaultStocks.map((data, index) => <DefaultButton key={index} data={data} currentPage={currentPage} setData={setData} />)
      case 'Currency':
        return defaultCurrencies.map((data, index) => <DefaultButton key={index} data={data} currentPage={currentPage} setData={setData} />)
      case 'Government Data':
        return defaultGovernment.map((data, index) => <DefaultButton key={index} data={data} currentPage={currentPage} setData={setData} />)
    }
  }
  return (
    <div id="alertReference" className="card default-card">
      <div id="default-btns" className="card-body">
        <h5 id="defaultText" className="card-title text-center text-uppercase">
          {renderDefaultNames(currentPage)}
        </h5>
        <div className="d-grid gap-2" id="stock-card">
          {renderButtons(currentPage)}
        </div>
      </div>
    </div>
  )
}
