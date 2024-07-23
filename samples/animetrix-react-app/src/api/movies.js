import { AsgardeoSPAClient } from "@asgardeo/auth-react";

// Initialize the AsgardeoSPAClient.
const auth = AsgardeoSPAClient.getInstance();

export async function getMovieCategories() {
    const requestConfig = {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        method: "GET",
        url: "https://bdc81b0c-bae6-43e8-b4aa-0702a82aee77-prod.e1-us-east-azure.choreoapis.dev/animetrix/movie-catalog-service/v1.0/categories",
    };

    try {
        const response = await auth.httpRequest(requestConfig);
        
        return response.data;
    } catch (error) {
        // Log the error.
        console.error("Failed to fetch external API.", error);
    }
}
