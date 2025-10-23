import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [queries, setQueries] = useState([]);
  const [savedQueries, setSavedQueries] = useState([]);

  useEffect(() => {
    const fetchSavedQueries = async () => {
      try {
        const res = await axios.get("http://localhost:5000/get-queries");
        setSavedQueries(res.data);
      } catch (err) {
        console.error("Error fetching saved queries:", err);
      }
    };

    fetchSavedQueries();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    const newQueries = [...queries, query];
    setQueries(newQueries);
    setQuery("");

    if (newQueries.length % 10 === 0) {
      try {
        await axios.post("http://localhost:5000/save-queries", {
          queries: newQueries,
        });
        alert("10 queries saved to database!");
        setQueries([]);
        const res = await axios.get("http://localhost:5000/get-queries");
        setSavedQueries(res.data);
      } catch (err) {
        console.error("Error saving queries:", err);
      }
    }
  };

  return (
    <div className="app-container">
      <h2>🔍 Search App</h2>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Enter search term..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div className="table-container">
        <h3>Recent Queries (not yet saved)</h3>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Query</th>
            </tr>
          </thead>
          <tbody>
            {queries.map((q, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{q}</td>
              </tr>
            ))}
            {queries.length === 0 && (
              <tr>
                <td colSpan="2" className="empty-row">No recent queries</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="table-container">
        <h3>Saved Queries (from DB)</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Query</th>
            </tr>
          </thead>
          <tbody>
            {savedQueries.map((q) => (
              <tr key={q.id}>
                <td>{q.id}</td>
                <td>{q.query}</td>
              </tr>
            ))}
            {savedQueries.length === 0 && (
              <tr>
                <td colSpan="2" className="empty-row">No saved queries</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
