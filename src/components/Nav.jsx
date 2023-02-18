import PageButton from './PageButton'

export default function Nav({ selectedPage, setPage }) {
  const pages = ['Stocks', 'Currency', 'Government Data']
  return (
    <nav className="navbar navbar-expand-md border-bottom border-dark border-opacity-50 bg-body-tertiary justify-content-between">
      <a className="navbar-brand bg-dark text-light ms-2 p-2 fw-bold rounded ">Stock Market Visualizer</a>
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
            <PageButton key={index} index={index} page={page} setPage={setPage} selectedPage={selectedPage} />
          ))}
        </div>
      </div>
    </nav>
  )
}
