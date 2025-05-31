import { useEffect, useState } from 'react'
import { useUser } from './UserContext' 
import { supabase } from '../../supabaseClient'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const { email, setEmail } = useUser()
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchEmailIfNotSet = async () => {
      if (!email) {
        const { data: { user }, error } = await supabase.auth.getUser()
        if (user?.email) {
          setEmail(user.email)
        }
      }
      setLoading(false)
    }

    fetchEmailIfNotSet()
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    setEmail(null)
    navigate('/')  
  }

  if (loading) return <p>Loading...</p>

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Dashboard</h1>
      <p>Welcome, {email ? email : 'Guest'}!</p>
      <button onClick={handleLogout} style={{ marginTop: '20px' }}>
        Logout
      </button>
    </div>
  )
}
