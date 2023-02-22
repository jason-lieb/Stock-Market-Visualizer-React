import { useState, useEffect } from 'react'

export default function TimeButton({ time, selectedTimePeriod, setTimePeriod, page }) {
  const nonselectedClasses = 'btn btn-dark rounded-1 mx-1 hoverHighlight'
  const selectedClasses = 'btn btn-dark rounded-1 mx-1 btn-outline-success'
  function timeButtonClasses() {
    return time === selectedTimePeriod ? selectedClasses : nonselectedClasses
  }

  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    if (page === 'Government Data') setDisabled(true)
    if (page === 'Stocks' || page === 'Currency') setDisabled(false)
  }, [page])

  return (
    <button onClick={() => setTimePeriod(time)} data-value={time} disabled={time !== 'All' && disabled} className={timeButtonClasses()}>
      {time}
    </button>
  )
}
