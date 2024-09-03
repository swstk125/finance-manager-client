import axios from 'axios';
const apiBaseUrl = "http://localhost:3000"

export const loginUser = async (email, password) => {
    try {
      const response = await axios.post(`${apiBaseUrl}/login`, { email, password });
      return response.data; // Typically, you'd get a token or user data here
    } catch (error) {
      console.error('Failed to log in:', error);
      throw error;
    }
  };