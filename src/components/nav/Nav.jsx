import PageButton from './PageButton'

export default function Nav({ selectedPage, setPage, setTimePeriod, setData }) {
  const pages = ['Stocks', 'Currency', 'Government Data']
  return (
    <nav className="navbar navbar-expand-md border-bottom border-dark border-opacity-50 bg-body-tertiary justify-content-between">
      <h1 className="navbar-brand text-success ms-2 m-0 p-2 fw-bolder rounded fs-3">Stock Market Visualizer</h1>
      <button
        className="navbar-toggler me-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar-toggler"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbar-toggler">
        <div id="navbar-btns" className="navbar-nav nav-pills ">
          {pages.map((page, index) => (
            <PageButton key={index} index={index} page={page} setPage={setPage} selectedPage={selectedPage} setTimePeriod={setTimePeriod} setData={setData} />
          ))}
        </div>
      </div>
    </nav>
  )
}
