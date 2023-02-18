import currencyOptions from '../assets/currencyOptions.json'
import CurrencyOption from './CurrencyOption'

export default function CurrencyDropDowns() {
  return (
    <div id="currencyInputs" className="card default-card mb-5 text-uppercase">
      <div className="card-body">
        <div id="toCurrency">
          <label htmlFor="toCurrency" className="text-dark">
            To Currency
          </label>
          <select name="toCurrency" className="form-select mb-2">
            <option></option>
            {currencyOptions.map((option, index) => (
              <CurrencyOption key={index} option={option} />
            ))}
          </select>
        </div>
        <div id="fromCurrency" className="text-light">
          <label htmlFor="fromCurrency" className="text-dark">
            From Currency
          </label>
          <select name="fromCurrency" className="form-select mb-2">
            <option></option>
            {currencyOptions.map((option, index) => (
              <CurrencyOption key={index} option={option} />
            ))}
          </select>
        </div>
        <div className="d-grid">
          <button id="loadCurrency" className="btn btn-dark rounded-1 clickHighlight text-uppercase">
            Load Data
          </button>
        </div>
      </div>
    </div>
  )
}
