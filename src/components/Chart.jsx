import TimePeriods from './TimePeriods'

export default function Chart({ timePeriod, setTimePeriod, data, dataIndex, setDataIndex }) {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center" id="chart">
        <p>{data === undefined ? 'undefined' : data}</p>
      </div>
      <TimePeriods selectedTimePeriod={timePeriod} setTimePeriod={setTimePeriod} />
    </>
  )
}
