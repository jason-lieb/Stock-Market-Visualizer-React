import TimePeriods from './TimePeriods'
import DataChart from './DataChart'

export default function Main({ timePeriod, setTimePeriod, data, dataIndex, setDataIndex, page }) {
  return (
    <>
      <DataChart selectedTimePeriod={timePeriod} data={data} dataIndex={dataIndex} setDataIndex={setDataIndex} page={page} />
      <TimePeriods selectedTimePeriod={timePeriod} setTimePeriod={setTimePeriod} data={data} dataIndex={dataIndex} setDataIndex={setDataIndex} page={page} />
    </>
  )
}
