import SearchStock from './SearchStock'
import CurrencyDropDowns from './CurrencyDropDowns'
import Defaults from './Defaults'

export default function Inputs({ currentPage, setData }) {
  function renderSwitch(currentPage) {
    switch (currentPage) {
      case 'Stocks':
        return <SearchStock setData={setData} />
      case 'Currency':
        return <CurrencyDropDowns setData={setData} />
    }
  }
  return (
    <>
      {renderSwitch(currentPage)}
      <Defaults currentPage={currentPage} setData={setData} />
    </>
  )
}
