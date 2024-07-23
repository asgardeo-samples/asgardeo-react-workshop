import { DefaultLayout } from "../layouts/Default";
import "../styles/InsightsPage.css";
import graph from "../assets/graph.svg";

export const InsightsPage = () => {
    return (
        <DefaultLayout>
            <div className='graph-container'>
                <h2 className='graph-title'>Sales Performance</h2>
                <div className='slds-p-top--medium'>
                    <img src={ graph } />
                </div>
            </div>
            <div className="stats-container">
                <h2>Monthly Statistics</h2>
                <div className='search-bar'>
                    <input type='text' placeholder='Account number' />
                    <button className='search-button'>Search</button>
                </div>
                <div className='insights-container'>
                    <section className='resource-card electricity'>
                        <div className='card-icon'>🧑‍💻</div>
                        <div className='card-content'>
                            <h2>12,000+</h2>
                            <p>Active Users</p>
                            <a href='#' className='card-link'>
                                View users <span>➔</span>
                            </a>
                        </div>
                    </section>
                    <section className='resource-card gas'>
                        <div className='card-icon'>📈</div>
                        <div className='card-content'>
                            <h2>$4,800,000</h2>
                            <p>User Accounts</p>
                            <a href='#' className='card-link'>
                                View report <span>➔</span>
                            </a>
                        </div>
                    </section>
                    <section className='resource-card tax'>
                        <div className='card-icon'>📺</div>
                        <div className='card-content'>
                            <h2>500+</h2>
                            <p>Movies and TV Shows</p>
                            <a href='#' className='card-link'>
                                View all <span>➔</span>
                            </a>
                        </div>
                    </section>
                    <section className='resource-card tax'>
                        <div className='card-icon'>🗂</div>
                        <div className='card-content'>
                            <h2>120</h2>
                            <p>Partners</p>
                            <a href='#' className='card-link'>
                                View all <span>➔</span>
                            </a>
                        </div>
                    </section>
                    <section className='resource-card electricity'>
                        <div className='card-icon'>🎞</div>
                        <div className='card-content'>
                            <h2>200,000,000+</h2>
                            <p>Viewership statistics</p>
                            <a href='#' className='card-link'>
                                View report <span>➔</span>
                            </a>
                        </div>
                    </section>
                </div>
            </div>
        </DefaultLayout>
    );
};
