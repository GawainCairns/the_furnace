import React, { createContext, useState, useEffect } from 'react'

export const NewDataContext = createContext(null)

export function NewDataProvider({ children }) {
  const [newdata, setNewdata] = useState(null)

  useEffect(() => {
    let mounted = true
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        if (mounted) setNewdata(data)
      })
      .catch((err) => {
        console.error('Failed to fetch newdata', err)
      })

    return () => {
      mounted = false
    }
  }, [])

  return (
    <NewDataContext.Provider value={{ newdata}}>
      {children}
    </NewDataContext.Provider>
  )
}

export default NewDataProvider
