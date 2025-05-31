import { useState, useContext } from 'react'
import { supabase } from '../../supabaseClient'
import { UserContext } from './UserContext'
import "../styles/Login.css"

export default function Login() {
  const [emailInput, setEmailInput] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const { email, setEmail } = useContext(UserContext)

  const checkUserExists = async (email) => {
  const { data, error } = await supabase
    .from('users')      // your existing users table
    .select('email')
    .eq('email', email)
    .single()

  if (error && error.code !== 'PGRST116') {
    // Ignore "No rows found" error, but log others
    console.error('Error checking user existence:', error)
    return false
  }

  return data !== null
}

const handleMagicLinkLogin = async () => {
  setLoading(true)
  const exists = await checkUserExists(email)

  if (!exists) {
    setMessage('User not found. Please sign up first.')
    setLoading(false)
    return
  }

  const { error } = await supabase.auth.signInWithOtp({ email })

  if (error) {
    setMessage(`Error sending magic link: ${error.message}`)
  } else {
    setMessage(`Magic link sent to ${email}. Check your inbox!`)
  }
  setLoading(false)
}

  const handleOAuthLogin = async (provider) => {
    setLoading(true)
    const { error } = await supabase.auth.signInWithOAuth({ provider })

    if (error) {
      setMessage(`Error with ${provider} login: ${error.message}`)
    } else {
      setEmail(emailInput) // optional fallback
    }
    setLoading(false)
  }

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      setMessage(`Logout error: ${error.message}`)
    } else {
      setMessage('Logged out successfully')
      setEmail(null) // ✅ Clear email from context
    }
  }

  if (email) {
    return (
      <div style={{ textAlign: 'center', marginTop: '100px' }}>
        <h2>Welcome, {email}</h2>
        <button onClick={handleLogout}>Logout</button>
        <p>{message}</p>
      </div>
    )
  }

  return (
    <div className='login-container'>
      <h1>Welcome Back!</h1>
      <p style={{fontSize: '18px', fontWeight:'400', color:'grey', marginBottom:'50px'}}>Pick up where you left off — your unfinished projects are waiting</p>
      <input
        type="email"
        placeholder="Enter your email"
        value={emailInput}
        onChange={(e) => setEmailInput(e.target.value)}
        disabled={loading}
        className="signup-input"
      />
      <br /><br />
      <button onClick={handleMagicLinkLogin} disabled={loading || !emailInput} className="signup-button" style={{ marginTop: '0px' }}>
        {loading ? 'Sending...' : 'Send Verification Link'}
      </button>

      <button onClick={() => handleOAuthLogin('google')} disabled={loading} className="signup-button-google">
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48">
      <path fill="#ffc107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917" />
      <path fill="#ff3d00" d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691" />
      <path fill="#4caf50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.9 11.9 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44" />
      <path fill="#1976d2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917" />
    </svg>
        <p>Sign In with Google</p>
      </button>

      <button
        onClick={() => handleOAuthLogin('github')}
        disabled={loading}
         className="signup-button-git"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24.58" height="24" viewBox="0 0 256 250">
    <path fill="#161614" d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46c6.397 1.185 8.746-2.777 8.746-6.158c0-3.052-.12-13.135-.174-23.83c-35.61 7.742-43.124-15.103-43.124-15.103c-5.823-14.795-14.213-18.73-14.213-18.73c-11.613-7.944.876-7.78.876-7.78c12.853.902 19.621 13.19 19.621 13.19c11.417 19.568 29.945 13.911 37.249 10.64c1.149-8.272 4.466-13.92 8.127-17.116c-28.431-3.236-58.318-14.212-58.318-63.258c0-13.975 5-25.394 13.188-34.358c-1.329-3.224-5.71-16.242 1.24-33.874c0 0 10.749-3.44 35.21 13.121c10.21-2.836 21.16-4.258 32.038-4.307c10.878.049 21.837 1.47 32.066 4.307c24.431-16.56 35.165-13.12 35.165-13.12c6.967 17.63 2.584 30.65 1.255 33.873c8.207 8.964 13.173 20.383 13.173 34.358c0 49.163-29.944 59.988-58.447 63.157c4.591 3.972 8.682 11.762 8.682 23.704c0 17.126-.148 30.91-.148 35.126c0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002C256 57.307 198.691 0 128.001 0m-80.06 182.34c-.282.636-1.283.827-2.194.39c-.929-.417-1.45-1.284-1.15-1.922c.276-.655 1.279-.838 2.205-.399c.93.418 1.46 1.293 1.139 1.931m6.296 5.618c-.61.566-1.804.303-2.614-.591c-.837-.892-.994-2.086-.375-2.66c.63-.566 1.787-.301 2.626.591c.838.903 1 2.088.363 2.66m4.32 7.188c-.785.545-2.067.034-2.86-1.104c-.784-1.138-.784-2.503.017-3.05c.795-.547 2.058-.055 2.861 1.075c.782 1.157.782 2.522-.019 3.08m7.304 8.325c-.701.774-2.196.566-3.29-.49c-1.119-1.032-1.43-2.496-.726-3.27c.71-.776 2.213-.558 3.315.49c1.11 1.03 1.45 2.505.701 3.27m9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033c-1.448-.439-2.395-1.613-2.103-2.626c.301-1.01 1.747-1.484 3.207-1.028c1.446.436 2.396 1.602 2.095 2.622m10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95c-1.53.034-2.769-.82-2.786-1.86c0-1.065 1.202-1.932 2.733-1.958c1.522-.03 2.768.818 2.768 1.868m10.555-.405c.182 1.03-.875 2.088-2.387 2.37c-1.485.271-2.861-.365-3.05-1.386c-.184-1.056.893-2.114 2.376-2.387c1.514-.263 2.868.356 3.061 1.403" />
  </svg>
      <p>Sign In with GitHub</p>
      </button>
      <p className='msg'>{message}</p>
    </div>
  )
}
