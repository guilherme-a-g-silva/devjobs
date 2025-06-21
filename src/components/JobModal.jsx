import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import SubmittedContext from "../context/SubmittedContext"

export default function JobModal({ modal, closeModal, displayModal }) {
    const {submitted, setSubmitted} = React.useContext(SubmittedContext)
    const [isVisible, setIsVisible] = React.useState(false)

    React.useEffect(() => {
        if(displayModal) {
            const timer = setTimeout(() => setIsVisible(true), 10)
            return () => {
                clearTimeout(timer)
                setIsVisible(false)
            }
        }
    }, [displayModal])

    function toggleSubmitted() {
        setSubmitted(prev => {
            const exists = prev.some(entry => entry.id === modal.id)
            return exists ? prev : [...prev, { id: modal.id, submitted: true }]  
        })
    }

    const isJobSubmitted = (jobId) => {
        return submitted.some(entry => entry.id === jobId)
    }

    return (
        <div className={`job-modal ${isVisible ? "show" : ""}`}>
                <div className="job-modal-content" onClick={e => e.stopPropagation()}>
                    <button onClick={() => closeModal()}><IoCloseSharp /></button>
                    <h1>{modal.title}</h1>
                    <h2>Company: {modal.company}</h2>
                    <h3>Location: {modal.location}</h3>
                    <h3>Category: {modal.category}</h3>
                    {modal.description.split("\n\n").map((para, index) => (
                        <p key={index}>{para}</p>
                    ))}
                    <div className="submission">
                        {isJobSubmitted(modal.id) ? null : <button className="apply" onClick={toggleSubmitted}>Apply Now!</button>}
                        {isJobSubmitted(modal.id) && <p>Successfully submitted application!</p>}
                    </div>

                </div>
        </div>
    )
}