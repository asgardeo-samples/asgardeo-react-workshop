import { Navigate } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { Unauthorized } from "../pages/UnauthorizedPage";
import { HomePage } from "../pages/HomePage";
import { AuthenticatedComponent } from "@asgardeo/auth-react";
import ProtectedRoute from "../components/ProtectedRoute";
import { InsightsPage } from "../pages/InsightsPage";

// Static routes configuration function
export const getAppRoutes = (currentUserRoles) => [
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "/unauthorized",
        element: <Unauthorized />,
    },
    {
        path: "/home",
        element: (
            <AuthenticatedComponent fallback={<Navigate to='/' />}>
                <HomePage />
            </AuthenticatedComponent>
        ),
        exact: true,
    },
    {
        path: "/insights",
        element: <ProtectedRoute allowedRoles={ ["Anime-App-Admin"] } userRoles={ currentUserRoles } />,
        children: [
            {
                path: "",
                element: <InsightsPage />,
            },
        ],
    },
];
