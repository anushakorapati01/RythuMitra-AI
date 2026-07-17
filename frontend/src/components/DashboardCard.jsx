import "../styles/DashboardCard.css";

function DashboardCard({ icon, title }) {
  return (
    <div className="dashboard-card">

      <h1>{icon}</h1>

      <h3>{title}</h3>

    </div>
  );
}

export default DashboardCard;