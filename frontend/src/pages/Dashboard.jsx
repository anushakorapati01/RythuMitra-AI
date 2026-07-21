import DashboardCard from "../components/DashboardCard";
import "../styles/Dashboard.css";
import useTranslation from "../hooks/useTranslation";

function Dashboard() {

  const text = useTranslation();

  return (
    <div className="dashboard">

      <h1>{text.dashboard.title}</h1>

      <p>{text.dashboard.subtitle}</p>

      <div className="dashboard-grid">

        <DashboardCard
          icon="🌱"
          title={text.dashboard.cropRecommendation}
        />

        <DashboardCard
          icon="🦠"
          title={text.dashboard.diseaseDetection}
        />

        <DashboardCard
          icon="🌦"
          title={text.dashboard.weatherForecast}
        />

        <DashboardCard
          icon="💧"
          title={text.dashboard.irrigationAdvice}
        />

        <DashboardCard
          icon="💰"
          title={text.dashboard.marketPrices}
        />

        <DashboardCard
          icon="🤖"
          title={text.dashboard.aiAssistant}
        />

      </div>

    </div>
  );
}

export default Dashboard;