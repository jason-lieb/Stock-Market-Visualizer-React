import { useState, useEffect } from 'react'
import { selectDataForTimeRange } from '../utils/data'

export default function TimeButton({ time, selectedTimePeriod, setTimePeriod, data, dataIndex, setDataIndex, page }) {
  const nonselectedClasses = 'btn btn-dark rounded-1 mx-1 hoverHighlight'
  const selectedClasses = 'btn btn-dark rounded-1 mx-1 btn-outline-success'
  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    if (page === 'Government Data') setDisabled(true)
    if (page === 'Stocks' || page === 'Currency') setDisabled(false)
  }, [page])

  function timeButtonClasses() {
    return time === selectedTimePeriod ? selectedClasses : nonselectedClasses
  }

  function setTime() {
    setTimePeriod(time)

    // if (!data) {
    //   console.log('no data')
    //   return
    // }
    // setDataIndex(selectDataForTimeRange(data, time, page))
  }
  return (
    <button onClick={setTime} data-value={time} id="three-mon-btn" disabled={time !== 'All' && disabled} className={timeButtonClasses()}>
      {time}
    </button>
  )
}
