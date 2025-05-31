import { useEffect, useContext } from 'react'
import { supabase } from '../../supabaseClient'
import { useNavigate } from 'react-router-dom'
import { UserContext } from './UserContext' // <-- import context

const apiUrl = import.meta.env.VITE_API_URL;

export default function OAuthCallback() {
  const navigate = useNavigate()
  const { setEmail } = useContext(UserContext) // <-- access context

  useEffect(() => {
    const storeUser = async () => {
      const { data: { user }, error } = await supabase.auth.getUser()

      if (error || !user) {
        console.error('Error getting user:', error)
        return
      }

      const email = user.email
      const username = email.split('@')[0]

      // Set email in UserContext ✅
      setEmail(email)

      // Save user in your DB
      try {
        const response = await fetch(`${apiUrl}/api/save-user`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, name: username }),
        })

        if (!response.ok) {
          const errorData = await response.json()
          console.error('Error saving user to DB:', errorData)
        }
      } catch (err) {
        console.error('Network error while saving user to DB:', err)
      }

      // Redirect to dashboard
      navigate('/dashboard')
    }

    storeUser()
  }, [])

  return <p>Finishing signup... please wait.</p>
}
