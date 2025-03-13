import Versions from './components/Versions'
import electronLogo from './assets/electron.svg'
import { app } from 'electron/main'
import { Button } from './components/ui/button'

function App(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  // hide dock icon
  return (
    <div>
      <Button>hello world</Button>
    </div>
  )
}

export default App
