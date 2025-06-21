export default function useJobFilters(jobs) {
    const categories = Array.from(new Set(jobs.map(job => job.category.trim())));
    const locations = Array.from(new Set(jobs.map(job => job.location.trim())));

    const filters = {
        categories: categories,
        locations: locations
    }

    return filters;
}