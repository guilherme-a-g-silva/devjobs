import { useSearchParams, Link, NavLink } from "react-router-dom";
import React from "react";
import jobs from "../data/jobs.js";
import JobCard from "../components/JobCard.jsx";
import useJobFilters from "../hooks/useJobFilters.js";
import JobModal from "../components/JobModal.jsx";
import { IoCloseSharp } from "react-icons/io5";

export default function Home() {
    const [searchParams, setSearchParams] = useSearchParams()
    const categoryFilter = searchParams.get("category")
    const localFilter = searchParams.get("location")
    const searchTerm = searchParams.get("search")?.toLowerCase() || ""

    const [jobData, setJobData] = React.useState([]);
    const [catDropToggle, setCatDropToggle] = React.useState(false)
    const [locDropToggle, setLocDropToggle] = React.useState(false)
    const [displayModal, setDisplayModal] = React.useState(false)
    const [modalToDisplay, setModalToDisplay] = React.useState({})
    
    React.useEffect(() => {
        setJobData(jobs)
    }, [])
    
    function toggleModal(jobId) {
        const job = jobData.find((job) => job.id === jobId)

        setModalToDisplay(job)
        setDisplayModal(true)
    }

    function closeModal() {
        setModalToDisplay({})
        setDisplayModal(false)
    }

    const removeCategory = () => {
        const newParams = new URLSearchParams(searchParams)
        newParams.delete("category")
        setSearchParams(newParams)
    }

    const removeLocation = () => {
        const newParams = new URLSearchParams(searchParams)
        newParams.delete("location")
        setSearchParams(newParams)
    }

    const filters = useJobFilters(jobData)
    
    let displayedJobs = jobData

    displayedJobs = jobData.filter(job => {
        const matchesCategory = categoryFilter
            ? job.category.toLowerCase() === categoryFilter
            : true

        const matchesLocation = localFilter
            ? job.location.toLowerCase() === localFilter
            : true

        const matchesSearch = searchTerm
            ? job.title.toLowerCase().includes(searchTerm) ||
            job.company.toLowerCase().includes(searchTerm) ||
            job.description.toLowerCase().includes(searchTerm)
            : true

        return matchesCategory && matchesLocation && matchesSearch
    })


    const jobElements = displayedJobs.map((job) => {
        return <JobCard key={job.id} job={job} toggleModal={toggleModal} />
    })

    const catFilters = filters.categories.map(cat => {
        const newParams = new URLSearchParams(searchParams)
        newParams.set("category", cat.toLowerCase())

        return <NavLink 
            to={`?${newParams.toString()}`} 
            key={cat.toLowerCase()} 
            className="drop-filters"
            onClick={() => setCatDropToggle(false)}
            >
                {cat}
            </NavLink>
    })
    
    const locFilters = filters.locations.map(loc => {
        const newParams = new URLSearchParams(searchParams)
        newParams.set("location", loc.toLowerCase())
        
        return <NavLink 
        to={`?${newParams.toString()}`} 
        key={loc.toLowerCase()} 
        className="drop-filters"
        onClick={() => setLocDropToggle(prev => !prev)}
        >
            {loc}
        </NavLink>
    })

    return (
        <div className="master">
            {displayModal && <JobModal modal={modalToDisplay} closeModal={closeModal} displayModal={displayModal}/>}
            <div className={`home-container ${displayModal ? "modal" : ""}`}>
                <div className="applied-filters">
                    {categoryFilter && (
                        <span className="active-filter">
                            {categoryFilter} <button onClick={removeCategory}><IoCloseSharp className="filter-del" /></button>
                        </span>
                    )}
                    {localFilter && (
                        <span className="active-filter">
                            {localFilter} <button onClick={removeLocation}><IoCloseSharp className="filter-del" /></button>
                        </span>
                    )}
                </div>
                <div className="links">
                    <input 
                        type="text"
                        placeholder="Search"
                        onChange={(e) => {
                            const newParams = new URLSearchParams(searchParams)
                            if (e.target.value) {
                                newParams.set("search", e.target.value)
                            } else {
                                newParams.delete("search")
                            }
                            setSearchParams(newParams)
                        }}
                        value={searchTerm}
                    />
                    <div className="cat-drop">
                        <button onClick={() => setCatDropToggle(prev => !prev)}>Categories</button>
                        {catDropToggle && catFilters}
                    </div>
                    <div className="loc-drop">
                        <button onClick={() => setLocDropToggle(prev => !prev)}>Locations</button>
                        {locDropToggle && locFilters}
                    </div>
                    <NavLink to=".">Clear Filters</NavLink>
                </div>
                <div className="jobs">
                    {jobElements.length > 0 ? jobElements : <p>No jobs found for current filters.</p>}
                </div>
            </div>
        </div>
    )
}