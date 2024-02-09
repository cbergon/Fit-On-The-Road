import React from "react";
import { useNavigate } from "react-router-dom";

function Entreprises() {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="heading-1">Entreprises</h1>
      <div className="flex gap-2">
        <button type="button" onClick={() => navigate("/")}>
          Go to Home
        </button>
        <button type="button" onClick={() => navigate("/particuliers")}>
          Go to Particuliers
        </button>
      </div>
    </div>
  );
}

export default Entreprises;
