// src/utils/auth.js
import Cookies from 'js-cookie';

// Get the authentication token from cookies (it should be set by the main domain)
export const getAuthToken = () => {
    
  let token=  Cookies.get('token'); 
  console.log("stored main domain",token)
  return token
};

// // // Remove the authentication token from cookies (for logout)
// // export const removeAuthToken = () => {
// //   Cookies.remove('token', { domain: '.yourdomain.com' });  // Remove the token across subdomains
// };
