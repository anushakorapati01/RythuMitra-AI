import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import { translations } from "../translations";

function useTranslation() {
  const { language } = useContext(LanguageContext);

  console.log("Selected Language:", language);
  console.log("Translation:", translations[language]);

  return translations[language] || translations["English"];
}

export default useTranslation;