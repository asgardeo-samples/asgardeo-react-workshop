import "./App.css";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { HomePage } from "./pages/HomePage";
import { AuthenticatedComponent } from "@asgardeo/auth-react";
import { InsightsPage } from "./pages/InsightsPage";

const routers = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "/home",
        element: (
            <AuthenticatedComponent fallback={<Navigate to='/' />}>
                <HomePage />
            </AuthenticatedComponent>
        ),
    },
    {
        path: "/insights",
        element: (
            <AuthenticatedComponent fallback={<Navigate to='/' />}>
                <InsightsPage />
            </AuthenticatedComponent>
        ),
    }
]);

function App() {
    return <RouterProvider router={routers} />;
}

export default App;
