import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import LanguageContext from "../context/LanguageContext";
import { translations } from "../translations";

import "../styles/Language.css";

function Language() {
  const { language, setLanguage } = useContext(LanguageContext);

  const navigate = useNavigate();

  const text = translations[language];

  const languages = [
    { code: "English", name: "English" },
    { code: "తెలుగు", name: "తెలుగు" },
    { code: "हिन्दी", name: "हिन्दी" },
    { code: "தமிழ்", name: "தமிழ்" },
    { code: "ಕನ್ನಡ", name: "ಕನ್ನಡ" }
  ];

  return (
    <div className="language-container">

      <h1>🌾 RythuMitra AI</h1>

      <p>{text.language.title}</p>

      <div className="language-list">

        {languages.map((lang) => (
          <button
            key={lang.code}
            className={
              language === lang.code
                ? "language-btn selected"
                : "language-btn"
            }
            onClick={() => setLanguage(lang.code)}
          >
            {lang.name}
          </button>
        ))}

      </div>

      <button
        className="continue-btn"
        onClick={() => navigate("/")}
      >
        {text.language.continue}
      </button>

    </div>
  );
}

export default Language;