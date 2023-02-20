import './App.css'
import { useState } from 'react'
import ContinuousStocks from './components/ContinuousStocks'
import Inputs from './components/Inputs'
import Main from './components/Main'
import Nav from './components/Nav'

function App() {
  // google.charts.load('current', { packages: ['corechart'] })
  const [page, setPage] = useState('Stocks')
  const [timePeriod, setTimePeriod] = useState('All')
  const [data, setData] = useState()
  const [dataIndex, setDataIndex] = useState(0)

  return (
    <div className="App">
      <Nav setPage={setPage} selectedPage={page} setTimePeriod={setTimePeriod} />
      <ContinuousStocks />
      <main className="container-fluid mt-3 row justify-content-around">
        <div className="col-sm-3 d-flex flex-column" id="search_default">
          <Inputs currentPage={page} setData={setData} setTimePeriod={setTimePeriod} />
        </div>
        <div className="col-sm-7">
          <Main timePeriod={timePeriod} setTimePeriod={setTimePeriod} data={data} dataIndex={dataIndex} setDataIndex={setDataIndex} page={page} />
        </div>
      </main>
    </div>
  )
}

export default App
