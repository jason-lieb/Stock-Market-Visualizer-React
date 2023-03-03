import { useState } from 'react'
import { getData } from '../../utils/data'
import currencyOptions from '../../assets/currencyOptions.json'

export default function CurrencyDropDowns({ setData, setChartName }) {
  const [currency1, setCurrency1] = useState('')
  const [currency2, setCurrency2] = useState('')

  async function handleSelect() {
    if (currency1 === '' || currency2 === '') {
      // addAlert('Please Choose Two Currencies');
      return
    }
    setData(await getData(`${currency1}/${currency2}`, 'Currency', setChartName))
  }

  return (
    <div id="currencyInputs" className="card default-card mb-5 text-uppercase">
      <div className="card-body">
        <div id="toCurrency">
          <label htmlFor="toCurrency" className="text-dark">
            To Currency
          </label>
          <select onChange={(e) => setCurrency1(e.target.value)} name="toCurrency" className="form-select mb-2">
            <option></option>
            {currencyOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div id="fromCurrency" className="text-light">
          <label htmlFor="fromCurrency" className="text-dark">
            From Currency
          </label>
          <select onChange={(e) => setCurrency2(e.target.value)} name="fromCurrency" className="form-select mb-2">
            <option></option>
            {currencyOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="d-grid">
          <button onClick={handleSelect} id="loadCurrency" className="btn btn-dark rounded-1 clickHighlight text-uppercase">
            Load Data
          </button>
        </div>
      </div>
    </div>
  )
}
