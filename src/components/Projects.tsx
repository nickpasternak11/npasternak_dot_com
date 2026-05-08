import React from "react";
import '../assets/styles/Projects.scss';

const placeholderStyle: React.CSSProperties = {
    width: '100%',
    aspectRatio: '16 / 9',
    background: 'linear-gradient(135deg, #2a2a3e 0%, #5000ca 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'rgba(255,255,255,0.85)',
    fontWeight: 600,
    fontSize: '1.1rem',
    textAlign: 'center',
    padding: '1rem',
    boxSizing: 'border-box',
};

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">
                <div className="project">
                    <a href="https://github.com/nickpasternak11/dfs_lineup_optimizer" target="_blank" rel="noreferrer">
                        <div className="zoom" style={placeholderStyle}>DFS Lineup Optimizer</div>
                    </a>
                    <a href="https://github.com/nickpasternak11/dfs_lineup_optimizer" target="_blank" rel="noreferrer"><h2>NFL Fantasy Football Forecasting Model & Lineup Optimizer</h2></a>
                    <p>Full-stack web application that forecasts NFL player performance and optimizes DraftKings Daily Fantasy lineups to maximize projected points within salary and positional constraints.</p>
                </div>
                <div className="project">
                    <a href="https://github.com/nickpasternak11/march_madness" target="_blank" rel="noreferrer">
                        <div className="zoom" style={placeholderStyle}>March Madness</div>
                    </a>
                    <a href="https://github.com/nickpasternak11/march_madness" target="_blank" rel="noreferrer"><h2>March Madness Bracket Predictor</h2></a>
                    <p>Monte Carlo bracket simulator for the NCAA Division I Men's Basketball Tournament.</p>
                </div>
            </div>

            {/* <h1 style={{ marginTop: '4rem' }}>Publications</h1>
            <div className="projects-grid">
                <div className="project">
                    <a href="https://ieeexplore.ieee.org/document/9843287" target="_blank" rel="noreferrer">
                        <h2>Using Machine Learning to Evaluate Real Estate Prices Using Location Big Data</h2>
                    </a>
                    <p>Co-authored peer-reviewed IEEE paper (2022). Built an ensemble pricing model combining Random Forest and Ridge Regression, integrating mobile location data to improve real-estate price prediction accuracy.</p>
                </div>
            </div> */}
        </div>
    );
}

export default Project;
