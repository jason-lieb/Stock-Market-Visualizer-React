import ContinuousStock from './ContinuousStock'
import Error429 from './Error429'
import { useState } from 'react'

export default function StockBanner() {
  const continuousStocks = ['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOGL', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'JPM', 'META', 'V', 'PG', 'NVDA']
  const [failedFetch, setFailedFetch] = useState(false)

  return (
    <div id="scrollWrap" className="d-flex align-items-center mt-3 mb-md-2">
      <div id="scrolling" className="d-flex container-fluid">
        {failedFetch && <Error429 />}
        {continuousStocks.map((stock) => (
          <ContinuousStock key={stock} stock={stock} setFailedFetch={setFailedFetch} />
        ))}
      </div>
    </div>
  )
}

// let error = false
// const [stockData, setStockData] = useState()
// const [timer, setTimer] = useState(1)

// useEffect(() => {
//   const controller = new AbortController()
//   fetch('/src/assets/testContinuousStockData.json', { signal: controller.signal })
//     .then((res) => res.json())
//     .then((data) => {
//       console.log('test')
//       setStockData(data)
//     })
//   return () => {
//     controller.abort()
//   }
// }, [timer])
// setInterval((timer) => setTimer(timer++), 500)
// async function getTestData() {
//   let stockData = await fetch('../../assets/testContinuousStockData.json')
//   console.log('stockData', stockData)
// }
// let stockData = continuousStocks.map(async (stock) => await getFinnhub(stock))
// useEffect(() => {
//   let error = false
//   stockData.forEach((stock) => (error = stock === '429 Error' ? true : error))
//   console.log('stockData', stockData)
// }, [stockData])
