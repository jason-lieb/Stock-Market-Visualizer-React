export default function TimeButton({ time, selectedTimePeriod, setTimePeriod }) {
  const nonselectedClasses = 'btn btn-dark rounded-1 mx-1 hoverHighlight'
  const selectedClasses = 'btn btn-dark rounded-1 mx-1 btn-outline-success'
  function timeButtonClasses() {
    return time === selectedTimePeriod ? selectedClasses : nonselectedClasses
  }
  return (
    <button onClick={() => setTimePeriod(time)} data-value={time} id="three-mon-btn" className={timeButtonClasses()}>
      {time}
    </button>
  )
}
