import './App.css'
import { useState, createContext } from 'react'
import ContinuousStocks from './components/ContinuousStocks'
import Inputs from './components/inputs/Inputs'
import Main from './components/main/Main'
import Nav from './components/nav/Nav'

function App() {
  const [timePeriod, setTimePeriod] = useState('All')
  const [data, setData] = useState()
  const [dataIndex, setDataIndex] = useState(0)
  const [page, setPage] = useState('Stocks')
  const PageContext = createContext()

  return (
    <div className="App">
      <Nav setPage={setPage} selectedPage={page} setTimePeriod={setTimePeriod} />
      <ContinuousStocks />
      <main className="container-fluid mt-3 row justify-content-around">
        <div className="col-sm-3 d-flex flex-column" id="search_default">
          <Inputs currentPage={page} setData={setData} setTimePeriod={setTimePeriod} />
        </div>
        <div className="col-sm-7">
          <Main selectedTimePeriod={timePeriod} setTimePeriod={setTimePeriod} data={data} dataIndex={dataIndex} setDataIndex={setDataIndex} page={page} />
        </div>
      </main>
    </div>
  )
}

export default App
