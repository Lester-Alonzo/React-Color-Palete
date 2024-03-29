import { useState } from 'react'
import { useAppContext } from './Colorcontext.jsx'

export default function Imagepick({ andle }) {
  const { rl, changeUrl } = useAppContext()
  function handleChange(e) {
    const file = e.target.files[0]
    const url = URL.createObjectURL(file)
    changeUrl(url)
  }
  function handleClick() {
    changeUrl('')
  }
  async function OpenEyeDropper() {
    const eyeDropper = new EyeDropper()
    const {sRGBHex} =  await eyeDropper.open()
    andle(sRGBHex)
  }
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '0.4rem',
        marginTop: '1rem'
      }}
    >
      <label
        htmlFor='img'
        style={{
          textAlign: 'center',
          backgroundColor: 'rgba(0,0,0, 0.5)',
          backdropFilter: 'blur(5px)',
          padding: '0.3rem',
          color: 'white',
          borderRadius: '11px',
          boxShadow: '1px 1px 11px rgba(0,0,0, 0.5)',
          cursor: 'pointer'
        }}
      >
        Seleccione una Image:
      </label>
      {rl !== '' ? (
        <>
        <button
          onClick={handleClick}
          style={{
            border: 'none',
            padding: '0.5rem 1.4rem',
            backgroundColor: '#dd3636',
            color: 'white',
            borderRadius: '11px',
            cursor: 'pointer',
            marginTop: '1rem',
          }}
        >
          x
        </button>
        <button
         onClick={OpenEyeDropper}
          style={{
            border: 'none',
            padding: '0.5rem 1.4rem',
            backgroundColor: '#1dff74',
            color: 'black',
            fontWeight:"bold",
            borderRadius: '11px',
            cursor: 'pointer',
            marginTop: '1rem',
            boxShadow:"1px 1px 11px rgba(0,0,0,.3)"
          }}
         >Picker</button>
        </>
      ) : null}
      <input type='file' id='img' hidden onChange={handleChange} />
      <img
        src={rl}
        style={{
          maxWidth: '100%',
          width: '60%',
          margin: '0 auto',
          boxShadow: '1px 1px 11px rgba(0,0,0, 0.5)'
        }}
      />
    </div>
  )
}
