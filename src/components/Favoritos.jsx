import { useEffect } from 'react'
import { useAppContext } from './Colorcontext.jsx'
import Fav from './Fav.jsx'

export default function Favoritos() {
  const { favoritos } = useAppContext()
  useEffect(() => {
    console.log(favoritos)
  }, [])
  if (favoritos.length === 0) return <h3 style={{ textAlign: 'center' }}> No tienes favoritos guardados</h3>

  return (
    <div
      style={{
        margin: '1rem 0',
        display: 'flex',
        gap: '1rem',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap'
      }}
    >
      {favoritos.map((fav, i) => (
        <div key={i} style={{ border: '1px solid black', padding: '1rem', borderRadius: '11px' }}>
          <h3 style={{ textAlign: 'center' }}>{fav.name}</h3>
          <Fav data={fav.color} />
        </div>
      ))}
    </div>
  )
}
