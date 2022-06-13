import { createContext, useState, useContext, useEffect } from 'react'

const AppContext = createContext()
const sessionColors = sessionStorage.getItem('colors')
const localFavoritos = localStorage.getItem('favs')
const initialState = sessionColors && sessionColors.length > 0 ? JSON.parse(sessionColors) : []
const initialFavo = localFavoritos && localFavoritos.length > 0 ? JSON.parse(localFavoritos) : []
const localCurrent = localStorage.getItem('current') ?? ''
const currentInitial = localCurrent ? localCurrent : ''
const sessionImg =sessionStorage.getItem('img') 
const initialUrl = sessionImg ? sessionImg : ''

export default function Colorcontext({ children }) {
  const [colors, setColors] = useState(initialState)
  const [favoritos, setFavoritos] = useState(initialFavo)
  const [current, setCurrent] = useState(currentInitial)
  const [rl, setUrl] = useState(initialUrl)

  function handleAddColors(color) {
    setColors([...colors, color])
  }
  function handleSaveFav(name) {
    setFavoritos([...favoritos, { name, color: colors }])
    sessionStorage.removeItem('colors')
    setColors([])
    setCurrent('')
  }
  function handleCurrent(color) {
    setCurrent(color)
  }
  function handleChangeUrl(url){
    setUrl(url)
  }
  useEffect(() => {
    sessionStorage.setItem('colors', JSON.stringify([...colors]))
  }, [colors])
  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify([...favoritos]))
  }, [favoritos])
  useEffect(() => {
    localStorage.setItem('current', current)
  }, [current])
  useEffect(() => {
    sessionStorage.setItem('img', rl)
  }, [rl])
  return (
    <AppContext.Provider
      value={{
        current,
        colors,
        rl,
        favoritos,
        addColors: handleAddColors,
        saveFav: handleSaveFav,
        changeCurrent: handleCurrent,
        changeUrl: handleChangeUrl
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}
