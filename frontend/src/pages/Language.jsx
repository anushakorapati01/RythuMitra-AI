import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Language.css";

function Language() {
  const [language, setLanguage] = useState("English");
  const navigate = useNavigate();

  const languages = [
    "English",
    "తెలుగు",
    "हिन्दी",
    "தமிழ்",
    "ಕನ್ನಡ"
  ];

  return (
    <div className="language-container">

      <h1>🌾 Welcome to RythuMitra AI</h1>

      <p>Choose Your Language</p>

      <div className="language-list">

        {languages.map((lang) => (
          <button
            key={lang}
            className={
              language === lang
                ? "language-btn selected"
                : "language-btn"
            }
            onClick={() => setLanguage(lang)}
          >
            {lang}
          </button>
        ))}

      </div>

      <button
        className="continue-btn"
        onClick={() => navigate("/login")}
      >
        Continue
      </button>

    </div>
  );
}

export default Language;