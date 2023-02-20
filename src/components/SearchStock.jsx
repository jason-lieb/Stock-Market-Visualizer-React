import { getData } from '../utils/data'

export default function SearchStock({ setData }) {
  function inputValidation(input) {
    return input.toString().trim().toUpperCase()
  }

  async function submithandler(e) {
    if (e.key !== 'Enter') return
    const data = inputValidation(e.target.value)
    e.target.value = ''
    setData(await getData(data, 'Stocks'))
  }

  return <input onKeyDown={submithandler} id="search" className="form-control mb-5" type="search" placeholder="Search stock tickers here" aria-label="Stock search bar input" />
}
