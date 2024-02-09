import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="heading-1">Index</h1>
      <div className="flex gap-2">
        <button type="button" onClick={() => navigate("/entreprises")}>
          Go to Entreprises
        </button>
        <button type="button" onClick={() => navigate("/particuliers")}>
          Go to Particuliers
        </button>
      </div>
    </div>
  );
}

export default Home;
