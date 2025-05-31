import { Routes, Route, Navigate } from 'react-router-dom';
import { useUser } from './components/UserContext';
import LandingPage from './components/LandingPage';
import Signup from './components/SignUp';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import OAuthCallback from './components/OAuthCallback';
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
