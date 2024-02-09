import React from "react";
import { useNavigate } from "react-router-dom";

function Particuliers() {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="heading-1">Particuliers</h1>
      <div className="flex gap-2">
        <button type="button" onClick={() => navigate("/")}>
          Go to Home
        </button>
        <button type="button" onClick={() => navigate("/entreprises")}>
          Go to Entreprises
        </button>
      </div>
    </div>
  );
}

export default Particuliers;
