import TimeButton from './TimeButton'

export default function TimePeriods(props) {
  const timePeriods = ['3m', '6m', 'YTD', '1y', '3y', '10y', 'All']
  return (
    <div id="time-btns" className="mt-2 mx-3">
      {timePeriods.map((timePeriod, index) => (
        <TimeButton key={index} time={timePeriod} {...props} />
      ))}
    </div>
  )
}
