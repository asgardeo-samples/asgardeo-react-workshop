import "../styles/Header.css";
import { useEffect, useState } from "react";
import { useAuthContext } from "@asgardeo/auth-react";

export const Header = () => {

    const { state, getDecodedIDToken } = useAuthContext();

    const [ isResourcesAllowed, setIsResourcesAllowed ] = useState(false);

    // Filter the display of Insights section based on the application role.
    useEffect(() => {
        getDecodedIDToken()
            .then((decodedIdToken) => {
                if (!decodedIdToken?.roles) {
                    return;
                }

                if (decodedIdToken?.roles === "Anime-App-Admin") {
                    setIsResourcesAllowed(true);
                }

                if (decodedIdToken?.roles.includes("Anime-App-Admin")) {
                    setIsResourcesAllowed(true);
                }
            })
            .catch((error) => {
                console.error("Error occurred while decoding the ID token", error);
            });
    }, [ getDecodedIDToken, state ]);

    return (
        <header>
            <div className='navbar'>
                <div className='left-panel'>
                    <h2>Animetrix</h2>
                </div>
                <div className='center-panel' id='center-panel'>
                    <a href='/home' className='nav active' id='home'>
                        Home
                    </a>
                    { isResourcesAllowed && (
                        <a href='/insights' className='nav' id='insights'>
                            Insights
                        </a>
                    ) }
                </div>
                <div className='right-panel'>
                    {/* <div className='avatar-dropdown'>
                        <div className='avatar'>
                            <a href='#'>username goes here</a>
                        </div>
                    </div> */}
                </div>
            </div>
        </header>
    );
};
