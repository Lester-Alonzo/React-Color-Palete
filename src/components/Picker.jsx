import React,{ useRef, useState } from 'react'
import styles from './picker.module.css'
import toast from 'react-hot-toast'
import { useAppContext } from './Colorcontext.jsx'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Imagepick from './Imagepick.jsx'

export default function Picker() {
  const input = useRef(null)
  const [color, setColor] = useState('#000')

  const { addColors, current, changeCurrent } = useAppContext()
  function handleClick() {
    changeCurrent(color)
    toast('copiado')
    addColors(color)
  }
  function actives(){
    console.log("click")
    input.current.click()
  }
  return (
    <div className={styles.container}>
       <Imagepick andle={actives}/>
        <span style={{textAlign:"center"}}>o</span>
        <input type='color' id='ui' hidden onChange={(e) => setColor(e.target.value)} ref={input} />
        <label htmlFor='ui' className={styles.cuadro} style={{ backgroundColor: color }}></label>
        <div className={styles.current} style={{ backgroundColor: current}}></div>
      <CopyToClipboard text={color}>
        <button onClick={handleClick} className={styles.btn} title="Copy to clipboard">{color}</button>
      </CopyToClipboard>
    </div>
  )
}
