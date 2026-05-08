import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faDatabase, faChartLine } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const mlLabels = [
    "PyTorch",
    "vLLM",
    "NVIDIA Triton",
    "ONNX",
    "OpenVINO",
    "Hailo",
    "XGBoost",
    "Scikit-learn",
];

const infraLabels = [
    "FastAPI",
    "RabbitMQ",
    "Docker",
    "MongoDB",
    "Redis",
    "DuckDB",
    "Apache Parquet",
    "Lucene",
];

const analyticsLabels = [
    "Python",
    "SQL",
    "MILP",
    "Pandas",
    "NumPy",
    "Plotly",
    "Matplotlib",
    "R",
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
                        <p>I build and deploy high-throughput computer vision and multimodal systems. I specialize in model quantization and optimization for edge hardware (Hailo/OpenVINO) and scalable cloud serving via NVIDIA Triton and vLLM.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {mlLabels.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faDatabase} size="3x" />
                        <h3>Data Systems & Infrastructure</h3>
                        <p>I design backend platforms and data pipelines that power large-scale annotation and analytics workflows—including FastAPI services, RabbitMQ messaging, and full-text/vector search over millions of records.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {infraLabels.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faChartLine} size="3x" />
                        <h3>Analytics & Optimization</h3>
                        <p>I build internal tools and applications that make data actionable—from interactive dashboards to optimization-driven systems using techniques like Mixed-Integer Linear Programming (MILP) and ensemble modeling.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {analyticsLabels.map((label, index) => (
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