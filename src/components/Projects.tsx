import React from "react";
import '../assets/styles/Projects.scss';
import draftkings_dfs from '../assets/images/draftkings_dfs.png';
import march_madness from '../assets/images/march_madness.jpg';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">

                {/* Project 1 */}
                <div className="project">
                    <a href="https://github.com/nickpasternak11/dfs_lineup_optimizer#dfs-lineup-optimizer" target="_blank" rel="noreferrer">
                        <img src={draftkings_dfs} className="zoom" alt="DFS Lineup Optimizer" />
                    </a>
                    <a href="https://github.com/nickpasternak11/dfs_lineup_optimizer#dfs-lineup-optimizer" target="_blank" rel="noreferrer">
                        <h2>NFL Fantasy Football Lineup Optimizer</h2>
                    </a>
                    <p>Full-stack web application for building optimal DraftKings Daily Fantasy lineups by maximizing projected points within salary and positional constraints.</p>
                </div>

                {/* Project 2 */}
                <div className="project">
                    <a href="https://github.com/nickpasternak11/march_madness/tree/main#march-madness-tournament-simulator" target="_blank" rel="noreferrer">
                        <img src={march_madness} className="zoom" alt="March Madness Simulator" />
                    </a>
                    <a href="https://github.com/nickpasternak11/march_madness/tree/main#march-madness-tournament-simulator" target="_blank" rel="noreferrer">
                        <h2>March Madness Bracket Simulator</h2>
                    </a>
                    <p>Monte Carlo bracket simulator for the NCAA Division I Men's Basketball Tournament utilizing ensemble modeling and historical seed performance data.</p>
                </div>

            </div>
        </div>
    );
}

export default Project;