import { useNavigate } from 'react-router-dom'

export default function LandingPage() {
  const navigate = useNavigate()

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Welcome to Our App!</h1>
      <button
        style={{ marginRight: '10px', padding: '10px 20px' }}
        onClick={() => navigate('/signup')}
      >
        Sign Up
      </button>
      <button
        style={{ padding: '10px 20px' }}
        onClick={() => navigate('/login')}
      >
        Login
      </button>
    </div>
  )
}
