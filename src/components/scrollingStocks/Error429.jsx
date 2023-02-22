export default function Error429() {
  return (
    <div id="error429" class="bg-danger card continuousStockError">
      <div class="card-body text-dark d-flex justify-content-between align-items-center py-1">
        <i class="fa-solid fa-circle-exclamation"></i>
        <span>API Calls Exceeded - Loading Test Data</span>
      </div>
    </div>
  )
}
