export default function Error429() {
  return (
    <div id="error429" className="bg-danger card continuousStockError">
      <div className="card-body text-dark d-flex justify-content-between align-items-center py-1">
        <i className="fa-solid fa-circle-exclamation"></i>
        <span>API Calls Exceeded</span>
      </div>
    </div>
  )
}
