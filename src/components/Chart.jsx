import TimePeriods from './TimePeriods'

export default function Chart({ timePeriod, setTimePeriod }) {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center" id="chart"></div>
      <TimePeriods selectedTimePeriod={timePeriod} setTimePeriod={setTimePeriod} />
    </>
  )
}
