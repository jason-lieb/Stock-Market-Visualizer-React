import ContinuousStock from './ContinuousStock'
import Error429 from './Error429'

export default function ContinuousStocks() {
  const continuousStocks = ['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOGL', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'JPM', 'META', 'V', 'PG', 'NVDA']

  return (
    <div id="scrollWrap" className="d-flex align-items-center mt-3 mb-md-2">
      <div id="scrolling" className="d-flex container-fluid">
        <Error429 />
        {continuousStocks.map((stock, index) => (
          <ContinuousStock key={index} stock={stock} />
        ))}
      </div>
    </div>
  )
}
