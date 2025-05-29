import { useState } from "react";
import axios from "axios";
const apiUrl = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts";
function App() {
  const [formData, setFormData] = useState({
    author: "fabio",
    title: "thungsaur",
    body: "bastone",
    public: false,
  });
  const handleForSubmit = (e) => {
    e.preventDefault();
    axios
      .post(apiUrl, {
        formData,
      })
      .then((res) => {
        const response = res.data;
        console.log(response);
      });
  };

  return (
    <form className="form-control" onSubmit={handleForSubmit}>
      <label className="form-label">AUTHOR</label>
      <input type="text" name="author" className="form-control" />
      <label className="form-label">TITLE</label>
      <input type="text" name="title " className="form-control" />
      <label className="form-label">BODY</label>
      <input type="text" name="body" className="form-control" />
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" />
        <label className="form-check-label"></label>
      </div>
      <button className="btn btn-primary" type="submit">
        Invia
      </button>
    </form>
  );
}

export default App;
