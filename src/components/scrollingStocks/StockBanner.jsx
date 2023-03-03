import ContinuousStock from './ContinuousStock'
import Error429 from './Error429'
// import { getFinnhub } from '../../utils/api'
// import { useEffect } from 'react'

export default function StockBanner() {
  const continuousStocks = ['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOGL', 'GOOG', 'BRK.B', 'UNH', 'JNJ', 'XOM', 'JPM', 'META', 'V', 'PG', 'NVDA']
  // let error = false
  let stockData
  // useEffect(() => {
  //   const controller = new AbortController()
  //   fetch('/src/assets/testContinuousStockData.json', { signal: controller.signal })
  //     .then((res) => res.json())
  //     .then((data) => (stockData = data))
  //   return () => {
  //     controller.abort()
  //   }
  // })
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

  return (
    <div id="scrollWrap" className="d-flex align-items-center mt-3 mb-md-2">
      <div id="scrolling" className="d-flex container-fluid">
        <Error429 />
        {/* {error && <Error429 />} */}
        {continuousStocks.map((stock, index) => (
          <ContinuousStock key={index} stock={stock} data={stockData} />
        ))}
      </div>
    </div>
  )
}
