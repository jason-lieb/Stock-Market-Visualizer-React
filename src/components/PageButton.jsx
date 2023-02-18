export default function PageButton({ page, index, selectedPage, setPage }) {
  const nonselected = 'nav-link text-dark ms-2 px-2 my-1 mx-md-2 border border-5 invisibleBorder'
  const selected = 'nav-link text-dark ms-2 px-2 my-1 mx-md-2 border border-5 border-success border-opacity-50'
  return (
    <button id={`nav-btn${index + 1}`} data-value={page} onClick={() => setPage(page)} className={page === selectedPage ? selected : nonselected}>
      {page.toUpperCase()}
    </button>
  )
}
