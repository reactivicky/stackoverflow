import React, { useState, createContext, ReactNode, useEffect } from 'react'
import axios from 'axios'

export const ListContext = createContext<any[]>([])

interface ListProviderProps {
  children: ReactNode
}

export const ListProvider: React.FC<ListProviderProps> = (props) => {
  const [state, setState] = useState<any>({
    isOpen: false,
    questions: [],
    selectedCard: {},
    error: ''
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const res = await axios.get('fakeData.json')
        const res = await axios.get('https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&site=stackoverflow&filter=withbody')
        setState((prevState: any) => ({ ...prevState, questions: res.data.items }))
      } catch (e) {
        setState((prevState: any) => ({ ...prevState, error: e.message }))
      }
    }
    fetchData()
  }, [])


  return (
    <ListContext.Provider value={[state, setState]}>
      {props.children}
    </ListContext.Provider>
  )
}