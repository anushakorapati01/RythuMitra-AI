import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";
import "../App.css";
import useTranslation from "../hooks/useTranslation";

function Home() {

  const text = useTranslation();

  return (
    <>
      <Hero />

      <section className="services">

        <h2>{text.services.title}</h2>

        <div className="services-grid">

          <FeatureCard
            icon="🌾"
            title={text.services.cropRecommendation}
            description={text.services.cropDescription}
          />

          <FeatureCard
            icon="🍃"
            title={text.services.diseaseDetection}
            description={text.services.diseaseDescription}
          />

          <FeatureCard
            icon="🌦"
            title={text.services.weatherForecast}
            description={text.services.weatherDescription}
          />

          <FeatureCard
            icon="💧"
            title={text.services.irrigationAdvice}
            description={text.services.irrigationDescription}
          />

          <FeatureCard
            icon="💰"
            title={text.services.marketPrices}
            description={text.services.marketDescription}
          />

          <FeatureCard
            icon="🏛"
            title={text.services.governmentSchemes}
            description={text.services.governmentDescription}
          />

        </div>

      </section>
    </>
  );
}

export default Home;