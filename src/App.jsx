import { useState } from "react";
const apiUrl = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts";
function App() {
  return (
    <form className="form-control" onSubmit={""}>
      <label className="form-label">AUTHOR</label>
      <input type="text" className="form-control" />
      <label className="form-label">TITLE</label>
      <input type="text" className="form-control" />
      <label className="form-label">BODY</label>
      <input type="text" className="form-control" />
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" />
        <label className="form-check-label">Check me out</label>
      </div>
    </form>
  );
}

export default App;
