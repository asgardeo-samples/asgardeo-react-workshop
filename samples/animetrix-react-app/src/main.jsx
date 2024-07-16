import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from "@asgardeo/auth-react";

const config = {
    signInRedirectURL: import.meta.env.VITE_REACT_APP_BASE_URL,
    signOutRedirectURL: import.meta.env.VITE_REACT_APP_BASE_URL,
    clientID: import.meta.env.VITE_REACT_APP_CLIENT_ID,
    baseUrl: import.meta.env.VITE_REACT_APP_ASGARDEO_BASE_URL,
    resourceServerURLs: import.meta.env.VITE_REACT_APP_RESOURCE_SERVER_URLS,
    scope: [ "openid", "profile", "internal_login", "internal_user_mgt_view", "app_roles" ]
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider config={ config }>
        <App />
    </AuthProvider>
  </React.StrictMode>,
)
