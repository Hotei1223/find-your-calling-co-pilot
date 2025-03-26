import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getAuthToken } from '../../utils/auth';

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [redirecting, setRedirecting] = useState(false);

  // Verify token with backend API using Axios
  const verifyToken = async (token) => {
    try {
      const response = await axios.get('https://api.testir.xyz/server3/api/auth/verifytoken', {
        headers: {
          Authorization: `${token}`,
        },
        withCredentials: true,
      });

      if (response.status === 200) {
        console.log('Token verified:', response.data);
        setIsAuthenticated(true);
        return
      }
    } catch (error) {
      console.warn('Token verification failed:', error.response?.data || error.message);
      setIsAuthenticated(false);
      setRedirecting(true);
      handleRedirect();
    } finally {
      setLoading(false);
    }
  };

  // Handle redirect to login page
  const handleRedirect = () => {
    const redirectUrl = encodeURIComponent(window.location.href);
    setTimeout(() => {
      window.location.href = `https://testir.xyz/auth?redirectTo=${redirectUrl}`;
    }, 2000);
  };

  // Check token and verify it on page load
  useEffect(() => {
    const token = getAuthToken();

    if (token) {
      verifyToken(token);
    } else {
      setIsAuthenticated(false);
      setRedirecting(true);
      handleRedirect();
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    if (redirecting) {
      return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
            <h2 className="text-xl font-semibold mb-4">Redirecting to Login</h2>
            <p className="text-gray-700">
              You will be redirected to the login page in a moment...
            </p>
          </div>
        </div>
      );
    }
    return null;
  }

  return children;
};

export default ProtectedRoute;
