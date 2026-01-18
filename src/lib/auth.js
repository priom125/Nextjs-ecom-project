// lib/auth.js
export const login = (email, password) => {
  if (email === "admin@example.com" && password === "123456") {
    document.cookie = "loggedIn=true; path=/; max-age=86400"; // 1 day
    return true;
  }
  return false;
};

export const logout = () => {
  document.cookie = "loggedIn=; path=/; max-age=0";
};

export const isAuthenticated = () => {
  if (typeof document === "undefined") return false;
  return document.cookie.includes("loggedIn=true");
};
