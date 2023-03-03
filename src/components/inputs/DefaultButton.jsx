import { getData } from '../../utils/data'

export default function DefaultButton({ data, currentPage, setData, setChartName }) {
  function renderButtonContent() {
    if (currentPage === 'Government Data') {
      return (
        <>
          {data[0]}
          <br />
          <span style={{ fontSize: '80%' }}>{data[1]}</span>
        </>
      )
    } else {
      return data
    }
  }
  return (
    <button onClick={async () => setData(await getData(data, currentPage, setChartName))} className="btn btn-dark rounded-1 clickHighlight">
      {renderButtonContent()}
    </button>
  )
}
