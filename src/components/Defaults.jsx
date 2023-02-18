import DefaultButton from './DefaultButton'

export default function Defaults({ currentPage }) {
  const defaultStocks = ['AMZN', 'AAPL', 'GOOG', 'META', 'NFLX', 'TSLA', 'NVDA', 'MSFT', 'DIS', 'GME']
  const defaultCurrencies = ['EUR/USD', 'GBP/USD', 'CAD/USD', 'AUD/USD', 'CNY/USD', 'JPY/USD']
  const defaultGovernment = ['GDP Annually', 'GDP Quarterly', 'PCE Annually', 'PCE Quarterly']

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
  function renderSwitch(currentPage) {
    switch (currentPage) {
      case 'Stocks':
        return defaultStocks.map((data, index) => <DefaultButton key={index} data={data} />)
      case 'Currency':
        return defaultCurrencies.map((data, index) => <DefaultButton key={index} data={data} />)
      case 'Government Data':
        return defaultGovernment.map((data, index) => <DefaultButton key={index} data={data} />)
    }
  }
  return (
    <div id="alertReference" className="card default-card">
      <div id="default-btns" className="card-body">
        <h5 id="defaultText" className="card-title text-center text-uppercase">
          {renderDefaultNames(currentPage)}
        </h5>
        <div className="d-grid gap-2" id="stock-card">
          {renderSwitch(currentPage)}
        </div>
      </div>
    </div>
  )
}
