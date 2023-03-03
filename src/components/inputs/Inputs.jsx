import SearchStock from './SearchStock'
import CurrencyDropDowns from './CurrencyDropDowns'
import Defaults from './Defaults'

export default function Inputs({ currentPage, setData, setChartName }) {
  function renderSwitch(currentPage) {
    switch (currentPage) {
      case 'Stocks':
        return <SearchStock setData={setData} setChartName={setChartName} />
      case 'Currency':
        return <CurrencyDropDowns setData={setData} setChartName={setChartName} />
    }
  }
  return (
    <>
      {renderSwitch(currentPage)}
      <Defaults currentPage={currentPage} setData={setData} setChartName={setChartName} />
    </>
  )
}
