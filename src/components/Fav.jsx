import { CopyToClipboard } from 'react-copy-to-clipboard'
import toast from 'react-hot-toast'
export default function Fav({ data }) {
  function notify() {
    toast('Copy')
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '2px' }}>
      {data.map((col, i) => (
        <CopyToClipboard text={col} key={i} >
          <div
            onClick={notify}
            style={{
              width: '100px',
              height: '100px',
              backgroundColor: col,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
            title="Copy"
          >
            {col}
          </div>
        </CopyToClipboard>
      ))}
    </div>
  )
}
