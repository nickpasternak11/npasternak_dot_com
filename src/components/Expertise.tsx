import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faDocker } from '@fortawesome/free-brands-svg-icons';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const mlLabels = [
    "PyTorch",
    "ONNX",
    "Scikit-learn",
    "XGBoost",
    "NVIDIA Triton",
    "OpenVINO",
    "Hailo",
    "Computer Vision",
    "VLMs",
];

const backendLabels = [
    "FastAPI",
    "RabbitMQ",
    "MongoDB",
    "Redis",
    "Lucene",
    "Solr",
    "DuckDB",
    "Apache Parquet",
    "ClickHouse",
    "MySQL",
];

const dataLabels = [
    "Python",
    "SQL",
    "R",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Plotly",
    "Seaborn",
    "Docker",
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <FontAwesomeIcon icon={faBrain} size="3x" />
                        <h3>Machine Learning & Computer Vision</h3>
                        <p>I build and deploy computer vision and multimodal AI systems at scale — from training and quantizing models for embedded/edge platforms to serving them on NVIDIA Triton with dynamic model management and performance benchmarking.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {mlLabels.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faDocker} size="3x" />
                        <h3>Backend & Data Engineering</h3>
                        <p>I design backend platforms and data pipelines that power large-scale annotation, search, and analytics workflows — including FastAPI services, RabbitMQ messaging, ETL into Parquet, and full-text/vector search over millions of records.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {backendLabels.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faPython} size="3x" />
                        <h3>Data Analysis & Full Stack</h3>
                        <p>I build internal tools and full-stack web applications that make data accessible — from interactive dashboards and dataset explorers to optimization-driven applications using techniques like MILP and ensemble modeling.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {dataLabels.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;