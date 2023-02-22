import { useState, useEffect } from 'react'
import { Chart } from 'react-google-charts'
import { createChartOptions } from '../../utils/chart'
import { selectDataForTimeRange } from '../../utils/data'

export default function DataChart({ data, dataIndex, setDataIndex, selectedTimePeriod, page }) {
  const [welcome, setWelcome] = useState(true)
  useEffect(() => {
    !data ? setWelcome(true) : setWelcome(false)
    !!data && setDataIndex(selectDataForTimeRange(data, selectedTimePeriod, page))
  }, [data, selectedTimePeriod, page])

  function renderContent() {
    if (welcome) {
      return (
        <div id="welcome" className="container">
          <h2>Welcome to the {page} Page</h2>
          <p>Choose whatever data you would like to see from our options on the left.</p>
        </div>
      )
    } else {
      const options = createChartOptions(page)
      const displayData = data.slice(dataIndex)
      displayData.unshift(['Time', 'Value'])
      return <Chart chartType="LineChart" data={displayData} width="100%" height="100%" options={options} />
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center overflow-hidden" id="chart">
      {renderContent()}
    </div>
  )
}
