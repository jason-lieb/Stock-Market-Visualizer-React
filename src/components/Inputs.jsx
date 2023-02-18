import SearchStock from './SearchStock'
import CurrencyDropDowns from './CurrencyDropDowns'
import Defaults from './Defaults'

export default function Inputs({ currentPage }) {
  function renderSwitch(currentPage) {
    switch (currentPage) {
      case 'Stocks':
        return <SearchStock />
      case 'Currency':
        return <CurrencyDropDowns />
    }
  }
  return (
    <>
      {renderSwitch(currentPage)}
      <Defaults currentPage={currentPage} />
    </>
  )
}
