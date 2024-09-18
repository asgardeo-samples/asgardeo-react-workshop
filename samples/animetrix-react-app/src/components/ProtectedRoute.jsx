import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ allowedRoles, userRoles }) => {

    // If the user doesn't have the required roles, redirect them to unauthorized page.
    if (!allowedRoles?.every((role) => userRoles?.includes(role))) {
        return <Navigate to='/unauthorized' />;
    }

    // Render the child routes (Outlet) if the user has the required roles
    return <Outlet />;
};

export default ProtectedRoute;
