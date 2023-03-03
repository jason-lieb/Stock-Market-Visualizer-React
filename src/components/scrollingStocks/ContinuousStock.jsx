export default function ContinuousStock({ stock, stockData }) {
  let data
  // console.log(stockData)
  // if (stockData) {
  //   stockData.forEach((entry) => entry.ticker === stock && (data = entry.incPercent))
  // }
  let color, chevron
  if (data > 0) {
    color = 'text-success'
    chevron = 'fa-chevron-up'
  } else {
    color = 'text-danger'
    chevron = 'fa-chevron-down'
  }
  return (
    <div className="bg-dark card continuousStock">
      <div className={`card-body ${color} d-flex justify-content-between py-1`}>
        <span>{stock}</span>
        <i className={`fas ${chevron}`}></i>
        <span>{data}%</span>
      </div>
    </div>
  )
}
