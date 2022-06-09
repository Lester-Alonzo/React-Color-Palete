import { useAppContext } from './Colorcontext.jsx'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import toast from 'react-hot-toast'

export default function Color() {
  const { colors, saveFav } = useAppContext()
  console.log('soy Color')
  function notify() {
    toast('copy')
  }
  function handle() {
    const name = prompt('Ingresa un nombre')
    saveFav(name)
  }
  if (colors.length == 0) return <h2 style={{ textAlign: 'center' }}>No agregaste Colores</h2>

  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '6rem',
        flexWrap: 'wrap',
        gap: '3px'
      }}
    >
      <button
        onClick={handle}
        style={{
          position: 'absolute',
          top: '-25px',
          border: 'none',
          boxShadow: '1px 1px 12px rgba(0,0,0,0.3)',
          padding: '0.2rem'
        }}
      >
        Save
      </button>
      {colors.map((color) => (
        <CopyToClipboard key={color} text={color}>
          <span
            onClick={notify}
            style={{
              width: '100px',
              height: '100px',
              backgroundColor: color,
              fontWeight: 'bold',
              color: 'white',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer'
            }}
          >
            {color}
          </span>
        </CopyToClipboard>
      ))}
    </div>
  )
}
