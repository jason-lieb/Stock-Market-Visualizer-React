import TimeButton from './TimeButton'
import DataChart from './DataChart'

export default function Main({ selectedTimePeriod, setTimePeriod, data, dataIndex, setDataIndex, page }) {
  const timePeriods = ['3m', '6m', 'YTD', '1y', '3y', '10y', 'All']
  return (
    <>
      <DataChart selectedTimePeriod={selectedTimePeriod} data={data} dataIndex={dataIndex} setDataIndex={setDataIndex} page={page} />
      <div id="time-btns" className="mt-2 mx-3">
        {timePeriods.map((timePeriod, index) => (
          <TimeButton key={index} time={timePeriod} selectedTimePeriod={selectedTimePeriod} setTimePeriod={setTimePeriod} page={page} />
        ))}
      </div>
    </>
  )
}
