import React from "react";
import SubmittedContext from "../context/SubmittedContext"
import { FaCheckCircle } from "react-icons/fa";

export default function JobCard({ job, toggleModal }) {
    const {submitted} = React.useContext(SubmittedContext)

    const isJobSubmitted = (jobId) => {
        return submitted.some(entry => entry.id === jobId)
    }

    return (
        <div className="job-card">
            <div className="title-category">
                <h2>{job.title}</h2>
                <p><span>Category: </span> {job.category}</p>
            </div>
            <div className="company-location">
                <p><span>Company: </span> {job.company}</p>
                <p><span>Location: </span>{job.location}</p>
            </div>
            <p className="description">{job.description}</p>
            <div className="details">
                <button onClick={() => toggleModal(job.id)}>View Details</button>
                {isJobSubmitted(job.id) && <FaCheckCircle className="icon-applied" />}
            </div>
        </div>
    )
}