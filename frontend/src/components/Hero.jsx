import "../styles/Hero.css";
import { useNavigate } from "react-router-dom";

function Hero() {

  const navigate = useNavigate();

  return (
    <section className="hero">

      <h1>🌾 Smart Farming Starts Here</h1>

      <p>
        Empowering Farmers with Artificial Intelligence
      </p>

      <div className="hero-buttons">

        <button
          className="start-btn"
          onClick={() => navigate("/language")}
        >
          🚀 Get Started
        </button>

        <button className="learn-btn">
          📖 Learn More
        </button>

      </div>

    </section>
  );
}

export default Hero;