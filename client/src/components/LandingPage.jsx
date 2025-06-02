import { useNavigate } from 'react-router-dom'

export default function LandingPage() {
  const navigate = useNavigate()

  return (
    <div className="text-center mt-24">
  <h1 className="text-2xl font-bold mb-6">Welcome to Our App!</h1>
  <button
    className="mr-4 px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    onClick={() => navigate('/signup')}
  >
    Sign Up
  </button>
  <button
    className="px-5 py-2 bg-green-500 text-white rounded hover:bg-green-600"
    onClick={() => navigate('/login')}
  >
    Login
  </button>
</div>

  )
}
