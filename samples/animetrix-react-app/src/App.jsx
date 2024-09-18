import "./App.css";
import React, { useEffect, useMemo, useState } from "react";
import { createBrowserRouter } from "react-router-dom";
import { useAuthContext } from "@asgardeo/auth-react";
import AppRouter from "./components/AppRouter";
import { Loader } from "./components/Loader";
import { getAppRoutes } from "./configs/Routes";

function App() {
    const { state, getDecodedIDToken } = useAuthContext();
    const [ userRoles, setUserRoles ] = useState(undefined);
    
    // Fetch the user roles and update the state
    useEffect(() => {
        const fetchUserRoles = async () => {
            try {
                const decodedIdToken = await getDecodedIDToken();

                if (!decodedIdToken?.roles) {
                    return;
                }

                if (decodedIdToken?.roles && decodedIdToken?.roles?.length > 0) {
                    setUserRoles(decodedIdToken.roles);
                }
            } catch (error) {
                console.error("Error occurred while decoding the ID token", error);
            }
        };

        if (state?.isAuthenticated) {
            fetchUserRoles();
        }
    }, [ getDecodedIDToken, state?.isAuthenticated ]);

    // Memoize the router to avoid recreating it on every render
    const router = useMemo(() => {
        return createBrowserRouter(getAppRoutes(userRoles));
    }, [ userRoles ]);

    return (
        <div>
            { router ? <AppRouter router={ router } /> : <Loader /> }
        </div>
    );
}

export default App;
