import DashboardCard from "../components/DashboardCard";
import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">

      <h1>🌾 Welcome to RythuMitra AI</h1>
      <p>Smart Farming Dashboard</p>

      <div className="dashboard-grid">

        <DashboardCard
          icon="🌱"
          title="Crop Recommendation"
        />

        <DashboardCard
          icon="🦠"
          title="Disease Detection"
        />

        <DashboardCard
          icon="🌦"
          title="Weather Forecast"
        />

        <DashboardCard
          icon="💧"
          title="Irrigation Advice"
        />

        <DashboardCard
          icon="💰"
          title="Market Prices"
        />

        <DashboardCard
          icon="🤖"
          title="AI Assistant"
        />

      </div>

    </div>
  );
}

export default Dashboard;