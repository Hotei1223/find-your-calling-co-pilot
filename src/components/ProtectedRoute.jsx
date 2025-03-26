import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [redirecting, setRedirecting] = useState(false);
  const navigate = useNavigate();


  const verifyToken = async () => {
    try {
      const response = await fetch(
        "https://api.testir.xyz/server3/api/auth/verifytoken",
        {
          method: "GET",
          credentials: "include", 
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Token verified:", data);
        setIsAuthenticated(true);
      } else {
        console.warn("Token verification failed:", response.statusText);
        redirectToAuth(); 
      }
    } catch (error) {
      console.warn("Token verification error:", error.message);
      redirectToAuth(); 
    } finally {
      setLoading(false);
    }
  };


  const redirectToAuth = () => {
    setRedirecting(true);
    const redirectUrl = encodeURIComponent(window.location.href);
    setTimeout(() => {
      window.location.href = `https://testir.xyz/auth?redirectTo=${redirectUrl}`;
    }, 1500);
  };


  useEffect(() => {
    verifyToken();
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
