import AllRoutes from "./AllRoutes";
import "./App.css";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import { Header } from "./Components/Navbar/Header";
import ReportRoutes from "./Pages/ReportIncident/ReportRoutes";


function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const isDashboard = location.pathname === "/adminDashboard";

  return (
    <>
      {!isDashboard && <Header />}
      <AllRoutes />
      <ReportRoutes />
      {!isDashboard && <Footer />}
    </>
  );
}

export default App;
