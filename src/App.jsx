import './App.css'
import { useState } from 'react'
import ContinuousStocks from './components/ContinuousStocks'
import Inputs from './components/Inputs'
import Chart from './components/Chart'
import Nav from './components/Nav'

function App() {
  const [page, setPage] = useState('Stocks')
  const [timePeriod, setTimePeriod] = useState('3m')
  google.charts.load('current', { packages: ['corechart'] })

  return (
    <div className="App">
      <Nav setPage={setPage} selectedPage={page} />
      <ContinuousStocks />
      <main className="container-fluid mt-3 row justify-content-around">
        <div className="col-sm-3 d-flex flex-column" id="search_default">
          <Inputs currentPage={page} />
        </div>
        <div className="col-sm-7">
          <Chart timePeriod={timePeriod} setTimePeriod={setTimePeriod} />
        </div>
      </main>
    </div>
  )
}

export default App
