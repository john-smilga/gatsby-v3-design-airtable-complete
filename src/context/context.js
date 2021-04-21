import React, { useState } from 'react'
import sublinks from '../constants/links'

const GatsbyContext = React.createContext()

//Provider, Consumer

const GatsbyProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [links, setLinks] = useState(sublinks)

  const showSidebar = () => {
    setIsSidebarOpen(true)
  }
  const hideSidebar = () => {
    setIsSidebarOpen(false)
  }

  return (
    <GatsbyContext.Provider
      value={{ isSidebarOpen, links, showSidebar, hideSidebar }}
    >
      {children}
    </GatsbyContext.Provider>
  )
}

export { GatsbyContext, GatsbyProvider }
