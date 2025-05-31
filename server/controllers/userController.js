const { supabase } = require('../supabaseClient');

const saveUser = async (req, res) => {
  try {
    const { email, name } = req.body;

    if (!email || !name) {
      return res.status(400).json({ error: 'Email and username are required' });
    }

    const { data, error } = await supabase
      .from('users')
      .insert([{ email, name }]);
    

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    return res.status(201).json({ message: 'User saved successfully', data });
  } catch (err) {
    console.error('Error in saveUser:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { saveUser };
