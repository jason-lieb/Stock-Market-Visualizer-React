import { useQuery } from 'react-query'
import { getFinnhub } from '../../utils/api'

export default function ContinuousStock({ stock, setFailedFetch }) {
  const { isLoading, isError, data } = useQuery(stock, () => getFinnhub(stock), { refetchInterval: 60000 })

  if (isLoading) {
    return (
      <div className="bg-dark card continuousStock">
        <div className={'card-body text-success d-flex justify-content-between align-items-center py-1'}>
          <span>{stock}</span>
          <div id="loading" className="spinner-border" style={{ width: '1rem', height: '1rem' }} role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <span>{data}%</span>
        </div>
      </div>
    )
  }

  if (isError || !data) {
    setFailedFetch(true)
    return (
      <div className="bg-dark card continuousStock">
        <div className="card-body text-danger d-flex justify-content-between align-items-center py-1">
          <span>{stock}</span>
          <i className="fa-solid fa-circle-exclamation"></i>
          <span>Error</span>
        </div>
      </div>
    )
  }

  setFailedFetch(false)
  let color, chevron
  if (data.incPercent > 0) {
    color = 'text-success'
    chevron = 'fa-chevron-up'
  } else {
    color = 'text-danger'
    chevron = 'fa-chevron-down'
  }
  return (
    <div className="bg-dark card continuousStock">
      <div className={`card-body ${color} d-flex justify-content-between align-items-center py-1`}>
        <span>{stock}</span>
        <i className={`fas ${chevron}`}></i>
        <span>{data.incPercent}%</span>
      </div>
    </div>
  )
}
