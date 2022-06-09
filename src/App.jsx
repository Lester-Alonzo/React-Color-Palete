import { Toaster } from 'react-hot-toast'
import Picker from './components/Picker.jsx'
import Colorcontext from './components/Colorcontext.jsx'
import Color from './components/Color.jsx'
import Favoritos from './components/Favoritos.jsx'

export default function App() {
  return (
    <Colorcontext>
      <Picker />
      <Color />
      <Favoritos />
      <Toaster />
    </Colorcontext>
  )
}
