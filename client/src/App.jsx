import { Routes, Route, Navigate } from 'react-router-dom';
import { useUser } from './pages/UserContext';
import LandingPage from './pages/LandingPage';
import Signup from './pages/SignUp';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import OAuthCallback from './pages/OAuthCallback';
import "./App.css"
function App() {
  const { email, loading } = useUser();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Routes>
      <Route path="/" element={email ? <Navigate to="/dashboard" /> : <LandingPage />} />
      <Route path="/signup" element={email ? <Navigate to="/dashboard" /> : <Signup />} />
      <Route path="/login" element={email ? <Navigate to="/dashboard" /> : <Login />} />
      <Route path="/oauth-callback" element={<OAuthCallback />} />

      <Route path="/dashboard" element={email ? <Dashboard /> : <Navigate to="/" />} />

      <Route path="*" element={<Navigate to={email ? "/dashboard" : "/"} />} />
    </Routes>
  );
}

export default App;
