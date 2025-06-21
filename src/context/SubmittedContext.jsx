import React, { createContext, useState } from "react"

const SubmittedContext = createContext()

export function SubmittedProvider({ children }) {
  const [submitted, setSubmitted] = useState([])

  return (
    <SubmittedContext.Provider value={{ submitted, setSubmitted }}>
      {children}
    </SubmittedContext.Provider>
  )
}

export default SubmittedContext
