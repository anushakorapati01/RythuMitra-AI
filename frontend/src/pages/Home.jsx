import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";
import "../App.css";

function Home() {
  return (
    <>
      <Hero />

      <section className="services">

        <h2>Our Services</h2>

        <div className="services-grid">

          <FeatureCard
            icon="🌾"
            title="Crop Recommendation"
            description="AI suggests the best crops based on soil and climate."
          />

          <FeatureCard
            icon="🍃"
            title="Disease Detection"
            description="Detect plant diseases by uploading an image."
          />

          <FeatureCard
            icon="🌦"
            title="Weather Forecast"
            description="Get real-time weather updates and alerts."
          />

          <FeatureCard
            icon="💧"
            title="Irrigation Advice"
            description="Receive smart watering recommendations."
          />

          <FeatureCard
            icon="💰"
            title="Market Prices"
            description="Check current crop prices in nearby markets."
          />

          <FeatureCard
            icon="🏛"
            title="Government Schemes"
            description="Explore farming subsidies and government programs."
          />

        </div>

      </section>
    </>
  );
}



export default Home;