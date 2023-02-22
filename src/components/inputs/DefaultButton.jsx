import { getData } from '../../utils/data'

export default function DefaultButton({ data, currentPage, setData }) {
  return (
    <button onClick={async () => setData(await getData(data, currentPage))} className="btn btn-dark rounded-1 clickHighlight">
      {data}
    </button>
  )
}
