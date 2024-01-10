export const setSessionToken = (token) => {
    localStorage.setItem('sessionToken', token);
  };
  
  export const getSessionToken = () => {
    return localStorage.getItem('sessionToken');
  };
  
  export const clearSessionToken = () => {
    localStorage.removeItem('sessionToken');
  };