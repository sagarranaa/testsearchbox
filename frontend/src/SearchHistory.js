// SearchHistory.js
import React from "react";

function SearchHistory({ queries }) {
  return (
    <div>
      <h3>Search History</h3>
      <ul>
        {queries.map((q, idx) => (
          <li key={idx}>{q}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchHistory;
