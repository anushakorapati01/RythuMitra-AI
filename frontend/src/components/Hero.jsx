import "../styles/Hero.css";
import { useNavigate } from "react-router-dom";
import useTranslation from "../hooks/useTranslation";

function Hero() {
  const navigate = useNavigate();
  const text = useTranslation();

  return (
    <section className="hero">

      <h1>{text.hero.title}</h1>

      <p>{text.hero.subtitle}</p>

      <div className="hero-buttons">

        <button
          className="start-btn"
          onClick={() => navigate("/language")}
        >
          {text.hero.getStarted}
        </button>

        <button
          className="learn-btn"
          onClick={() => navigate("/about")}
        >
          {text.hero.learnMore}
        </button>

      </div>

    </section>
  );
}

export default Hero;