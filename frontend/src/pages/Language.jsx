import { useState } from "react";

function Language() {
  const [language, setLanguage] = useState("English");

  return (
    <div
      style={{
        padding: "40px",
        textAlign: "center",
      }}
    >
      <h1>Select Language</h1>

      <h2>Selected Language: {language}</h2>

      <button onClick={() => setLanguage("English")}>
        English
      </button>

      <br /><br />

      <button onClick={() => setLanguage("తెలుగు")}>
        Telugu
      </button>

      <br /><br />

      <button onClick={() => setLanguage("हिन्दी")}>
        Hindi
      </button>
    </div>
  );
}

export default Language;