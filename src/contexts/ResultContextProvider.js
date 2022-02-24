import React, { createContext, useContext, useState } from 'react'

const ResultContext = createContext()

const baseUrl = 'https://google-search1.p.rapidapi.com/'

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const getResults = async (type) => {
    setIsLoading(true)

    const response = await fetch(`${baseUrl}${type}`, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'google-search1.p.rapidapi.com',
        'x-rapidapi-key': '25bca458e6msh34f2204bc2ef7d1p1a9be6jsnea80a9565511'
      }
    })

    const data = await response.json();
    const link = data?.organic?.sitelinks;
    console.log(data,data?.organic[0]?.sitelinks[0]?.href);
    setResults(data);
    setIsLoading(false);
  }
  return(
    <ResultContext.Provider value={{ getResults,results,searchTerm,setSearchTerm,isLoading }}>
      {children}
    </ResultContext.Provider>
  )
}

export const useResultContext = () => useContext(ResultContext);
