// src/components/UserContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient'; 

export const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [email, setEmail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user }, error } = await supabase.auth.getUser();

      if (error) {
        console.error('Error fetching user:', error);
      }

      if (user) {
        setEmail(user.email);
      }

      setLoading(false); 
    };

    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ email, setEmail, loading }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
