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
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleForSubmit = (e) => {
    e.preventDefault();

    axios
      .post(apiUrl, formData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error("Errore nella POST:", err);
      });
  };

  return (
    <form className="form-control" onSubmit={handleForSubmit}>
      <label className="form-label">AUTHOR</label>
      <input
        type="text"
        name="author"
        value={formData.author}
        onChange={handleChange}
        className="form-control"
      />

      <label className="form-label">TITLE</label>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        className="form-control"
      />

      <label className="form-label">BODY</label>
      <input
        type="text"
        name="body"
        value={formData.body}
        onChange={handleChange}
        className="form-control"
      />

      <div className="mb-3 form-check">
        <input
          type="checkbox"
          name="public"
          checked={formData.public}
          onChange={handleChange}
          className="form-check-input"
        />
        <label className="form-check-label">Public</label>
      </div>

      <button className="btn btn-primary" type="submit">
        Invia
      </button>
    </form>
  );
}

export default App;
