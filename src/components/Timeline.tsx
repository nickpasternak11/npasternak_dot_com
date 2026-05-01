import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Sept 2024 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Machine Learning Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Object Video Labs — Tysons, VA</h4>
            <p>
              Built and scaled an AI-powered video annotation platform (10x throughput), integrating computer vision and multimodal models served on NVIDIA Triton. Designed the FastAPI/RabbitMQ backend with MongoDB, Redis, and Lucene, and quantized models for OpenVINO, Innofusion, and Hailo edge platforms.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sept 2022 - Sept 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Analyst</h3>
            <h4 className="vertical-timeline-element-subtitle">Object Video Labs — Tysons, VA</h4>
            <p>
              Built a Python web app to explore metadata for 1M+ video clips, ETL pipelines from MongoDB to Parquet with DuckDB-backed search, and a MILP-based dataset balancing method to improve computer vision model training.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2020 - Sept 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Business Analyst Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">PG Public Services, LLC — Washington, DC</h4>
            <p>
              Improved FEMA's estimation of historical fire occurrences with an enhanced LASSO regression model, and developed R scripts to automate data cleaning, feature engineering, and model inference.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="June 2021 - May 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">M.S. Data Science</h3>
            <h4 className="vertical-timeline-element-subtitle">University of Virginia</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Aug 2018 - May 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">B.A. Statistics</h3>
            <h4 className="vertical-timeline-element-subtitle">University of Virginia</h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;